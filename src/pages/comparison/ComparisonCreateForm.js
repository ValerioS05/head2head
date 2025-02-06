import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Comparison.module.css";


function ComparisonCreateForm() {
  const [errors, setErrors] = useState({});
  const [comparisonData, setComparisonData] = useState({
    product1Id: "",
    product2Id: "",
    owner: "",
    isOwner: false,
  });

  const { product1Id, product2Id, owner, isOwner } = comparisonData;

  const handleChange = (event) => {
    setComparisonData({
      ...comparisonData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComparison = {
      owner,
      is_owner: isOwner,
      products: [product1Id, product2Id],
    };
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={12} lg={12}>
          <Container
            className="d-flex flex-column justify-content-center"
          >
            <div className="text-center">
              <Form.Group>
                <Form.Label>Product 1</Form.Label>
                <Form.Control
                  type="text"
                  name="product1Id"
                  value={product1Id}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product 2</Form.Label>
                <Form.Control
                  type="text"
                  name="product2Id"
                  value={product2Id}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                onClick={() => {}}
              >
                Cancel
              </Button>
              <Button
                type="submit"
              >
                Create Comparison
              </Button>
            </div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ComparisonCreateForm;
