import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";
import styles from "../styles/VoteForm.module.css";

const VoteForm = ({
  productId,
  existingVote,
  setProduct,
  fetchUpdatedProduct,
}) => {
  const [vote, setVote] = useState(existingVote || "");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setVote(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Check if a rating was selected
    if (!vote) {
      setErrors({ general: ["Please select a rating."] });
      setIsSubmitting(false);
      return;
    }

    try {
      await axiosReq.post("/votes/", {
        product: productId,
        vote: parseInt(vote),
      });

      // fetch updated product
      await fetchUpdatedProduct();
    } catch (err) {
      if (err.response?.data) {
        setErrors(err.response.data);
      } else {
        setErrors({
          general: ["There was an error while submitting your vote."],
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.voteForm}>
      <div className={styles.labelContainer}>
        <Form.Label>Rate this product</Form.Label>
      </div>

      {Object.entries(errors).map(([field, messages]) =>
        messages.map((message, index) => (
          <Alert variant="danger" key={`${field}-${index}`}>
            {message}
          </Alert>
        ))
      )}

      <Form.Group className={styles.formGroup}>
        <Form.Control
          as="select"
          value={vote}
          onChange={handleChange}
          disabled={isSubmitting}
          className={styles.Vote}
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "star" : "stars"}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <div className={styles.buttonContainer}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={styles.SubmitButton}
        >
          {isSubmitting ? "Submitting..." : "Submit Vote"}
        </Button>
      </div>
    </Form>
  );
};

export default VoteForm;
