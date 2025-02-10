import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentsForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const CommentsForm = ({ product, setProduct, setComments }) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {}, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

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
      // console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form className={`${styles.Form} mt-2`} onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className={styles.FormControl}
            placeholder="Write a comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={4}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} d-block ml-auto`}
        disabled={!content.trim() || isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Posting..." : "Post"}
      </button>
    </Form>
  );
};

export default CommentsForm;
