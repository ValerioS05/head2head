import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentsForm.module.css";

const CommentEditForm = (props) => {
  const { id, content, setShowEditForm, setComments, product_id } = props;

  const [formContent, setFormContent] = useState(content);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
        product: product_id,
      });

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim() || isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default CommentEditForm;
