import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/Profile.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function ProfileEditForm() {
  const [errors, setErrors] = useState({});
  const [profileData, setProfileData] = useState({
    owner: "",
    location: "",
    bio: "",
    profilePicture: "",
  });

  const { owner, location, profilePicture, bio } = profileData;
  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        const { owner, location, profile_picture, bio } = data;
        setProfileData({
          owner,
          location,
          profilePicture: profile_picture,
          bio,
        });
      } catch (err) {
        console.log("Error fetching profile:", err);
      }
    };

    handleMount();
  }, [id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      const previewUrl = URL.createObjectURL(file);
      setProfileData({
        ...profileData,
        profilePicture: previewUrl,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("owner", owner);
    formData.append("bio", bio);
    formData.append("location", location);

    if (imageInput.current && imageInput.current.files.length > 0) {
      const file = imageInput.current.files[0];
      formData.append("profile_picture", file);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setProfileData({
        owner: data.owner,
        location: data.location,
        profilePicture: data.profile_picture,
        bio: data.bio,
      });

      history.push(`/profiles/${id}/`);
      window.location.reload();
    } catch (err) {
      console.log("Error updating profile:", err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12} md={12} className="py-2">
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className={styles.CenterText}>
                <>
                  <figure>
                    <Image
                      className={`${appStyles.Image}`}
                      src={profilePicture}
                      rounded
                    />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${styles.Btn}`}
                      htmlFor="image-upload"
                    >
                      Change Image
                    </Form.Label>
                  </div>
                </>
              

              <div className="d-flex justify-content-center mt-2">
                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                  className={styles.ImgInput}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="owner"
                value={owner}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={bio}
                onChange={handleChange}
                rows={6}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                as="textarea"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>

      <div className="text-center">
        <Button
          className={`${btnStyles.Button} ${styles.Btn}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button className={`${btnStyles.Button} ${styles.Btn}`} type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
}

export default ProfileEditForm;
