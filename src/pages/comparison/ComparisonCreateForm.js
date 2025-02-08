import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/Comparison.module.css";
import Asset from "../../components/Asset";
import Product from "../products/Product";

// I need to change the layout or the product css to display better and less amount.
// Need to add the filtering also.

const ComparisonCreateForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosReq.get("/products/");
        setProducts(data.results);
      } catch (err) {
        console.log(err);
        setErrors("Failed to load products. Try again later.");
      }
    };
    fetchProducts();
  }, []);

  const handleSelectProduct = (product) => {
    const isSelected = selectedProducts.includes(product.id);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((id) => id !== product.id));
    } else if (selectedProducts.length < 2) {
      setSelectedProducts([...selectedProducts, product.id]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedProducts.length !== 2) {
      setErrors("You must select exactly two products.");
      return;
    }

    try {
      const { data } = await axiosReq.post("/comparisons/", {
        products: selectedProducts,
      });
      history.push(`/comparisons/${data.id}`);
    } catch (err) {
      console.log(err);
      setErrors("Failed to create comparison. Please try again.");
    }
  };

  return (
    <Container className={styles.comparisonFormContainer}>
      <h2>Create a Comparison</h2>
      {errors && <Alert variant="danger">{errors}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select two products to compare.</Form.Label>
          {products.length === 0 ? (
            <Asset spinner />
          ) : (
            <Row className="d-flex flex-wrap">
              {products.map((product) => {
                const isSelected = selectedProducts.includes(product.id);
                return (
                  <Col key={product.id} xs={12} sm={6} lg={4} className="mb-3">
                    <Product
                      {...product}
                      productPage={false}
                    />
                    <Button
                      variant={isSelected ? "outline-success" : "success"}
                      onClick={() => handleSelectProduct(product)}
                      className="w-100 mt-2"
                    >
                      {isSelected ? "Deselect" : "Select"} 
                    </Button>
                  </Col>
                );
              })}
            </Row>
          )}
        </Form.Group>
        {selectedProducts.length === 2 && (
          <div className={styles.stickyCompareButtonContainer}>
            <Button
              type="submit"
              className={styles.stickyCompareButton}
            >
              Compare
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default ComparisonCreateForm;
