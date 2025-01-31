import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";

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

    try {
      const { data } = await axiosReq.post("/votes/", {
        product: productId,
        vote: parseInt(vote),
      });

      // fetch updated product
      await fetchUpdatedProduct();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Rate this product (1-5)</Form.Label>
        <Form.Control
          as="select"
          value={vote}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button type="submit" disabled={isSubmitting} className="mt-2">
        {isSubmitting ? "Submitting..." : "Submit Vote"}
      </Button>
    </Form>
  );
};

export default VoteForm;
