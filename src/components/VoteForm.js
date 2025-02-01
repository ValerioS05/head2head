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
  const [errors, setErrors] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setVote(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(null);

    // Check if a rating was selected
    if (!vote) {
      setErrors("Please select a rating before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { data } = await axiosReq.post("/votes/", {
        product: productId,
        vote: parseInt(vote),
      });

      // fetch updated product
      await fetchUpdatedProduct();
    } catch (err) {
      setErrors("There was an error while submitting your vote.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.voteForm}>
  <div className={styles.labelContainer}>
    <Form.Label>Rate this product</Form.Label>
  </div>

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
    <Button type="submit" disabled={isSubmitting} className={styles.SubmitButton}>
      {isSubmitting ? "Submitting..." : "Submit Vote"}
    </Button>
  </div>
</Form>
  );
};

export default VoteForm;
