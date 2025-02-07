import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentsForm.module.css";
import styles2 from "../../styles/ProfileImage.module.css";
import ProfileImage from "../../components/ProfileImage";
import { axiosRes } from "../../api/axiosDefaults";
import useUserProfile from "../../hooks/useUserProfile";

const CommentsForm = ({ product, setProduct, setComments, profile_id }) => {
  const [content, setContent] = useState("");
  const { profilePicture } = useUserProfile(profile_id);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        product,
      });

      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));

      setProduct((prevProduct) => ({
        ...prevProduct,
        comments_count: prevProduct.comments_count + 1,
      }));

      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className={`${styles.Form} mt-2`} onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <ProfileImage src={profilePicture} className={styles2.ProfileImage} />
          </Link>
          <Form.Control
            className={styles.FormControl}
            placeholder="Write a comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </button>
    </Form>
  );
}

export default CommentsForm;
