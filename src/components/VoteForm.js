import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../api/axiosDefaults";
import styles from "../styles/VoteForm.module.css";

// Allows user to leave a vote/rating on a product
const VoteForm = ({
  productId,
  existingVote,
  setProduct,
  fetchUpdatedProduct,
}) => {
  const [vote, setVote] = useState(existingVote || "");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  const handleChange = (event) => {
    setVote(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setVoteSubmitted(false); // Reset the confirmation message on new submit

    // Check if a rating was selected
    if (!vote) {
      setErrors({ general: ["Please select a rating."] });
      setIsSubmitting(false);
      // Set a timeout to clear the error message after 3 seconds
      setTimeout(() => setErrors({}), 3000);
      return;
    }

    try {
      await axiosReq.post("/votes/", {
        product: productId,
        vote: parseInt(vote),
      });

      // fetch updated product
      await fetchUpdatedProduct();

      // Set confirmation message
      setVoteSubmitted(true);

      // Reset the confirmation message after 3 seconds
      setTimeout(() => {
        setVoteSubmitted(false);
      }, 3000); // Alert disappears after 3 seconds
    } catch (err) {
      if (err.response?.data) {
        setErrors(err.response.data);
      } else {
        setErrors({
          general: ["There was an error while submitting your vote."],
        });
      }
      // Set a timeout to clear the error message after 3 seconds
      setTimeout(() => setErrors({}), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.voteForm}>
      <div className={styles.labelContainer}>
        <Form.Label htmlFor="vote">Rate this product</Form.Label>
      </div>

      {Object.entries(errors).map(([field, messages]) =>
        messages.map((message, index) => (
          <Alert variant="danger" key={`${field}-${index}`}>
            {message}
          </Alert>
        ))
      )}

      {voteSubmitted && (
        <Alert variant="success">Your vote has been submitted!</Alert>
      )}

      <Form.Group className={styles.formGroup}>
        <Form.Control
          as="select"
          value={vote}
          onChange={handleChange}
          disabled={isSubmitting}
          className={styles.Vote}
          id="vote"
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
