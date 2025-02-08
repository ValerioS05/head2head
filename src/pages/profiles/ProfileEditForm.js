import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { useHistory, useParams, Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Profile.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

const ProfileEditForm = () => {
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
  const currentUser = useCurrentUser();

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

        if (currentUser && currentUser.username !== owner) {
          history.push("/");
        }
      } catch (err) {
        console.log("Error fetching profile:", err);
      }
    };

    handleMount();
  }, [id, currentUser, history]);

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
              <figure>
                <Image
                  className={`${appStyles.Image}`}
                  src={profilePicture}
                  rounded
                />
              </figure>

              <div className="d-flex justify-content-center mt-2">
                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                  className={styles.ImgInput}
                />
              </div>
              {errors.profile_picture && (
                <div className="text-danger">{errors.profile_picture}</div>
              )}
            </Form.Group>

            <div className={styles.OwnerDiv}>{owner}</div>

            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={bio}
                onChange={handleChange}
                rows={6}
                isInvalid={!!errors.bio}
              />
              {errors.bio && <div className="text-danger">{errors.bio}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                as="textarea"
                name="location"
                value={location}
                onChange={handleChange}
                isInvalid={!!errors.location}
              />
              {errors.location && (
                <div className="text-danger">{errors.location}</div>
              )}
            </Form.Group>
            <div className="text-center mt-3">
              <Link to={`/profiles/${id}/edit/username`}>
                <Button
                  className={`${btnStyles.Button} ${styles.Btn}`}
                  style={{ marginRight: '10px' }}
                >
                  Change Username
                </Button>
              </Link>
              <Link to={`/profile/${id}/edit/password/`}>
                <Button className={`${btnStyles.Button} ${styles.Btn}`}>
                  Change Password
                </Button>
              </Link>
            </div>
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
};

export default ProfileEditForm;
