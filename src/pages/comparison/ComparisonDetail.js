import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../products/Product";
import styles from "../../styles/Comparison.module.css";
import Asset from "../../components/Asset";

/* 
Display a comparison between two products 
Is displayed in two columns fetching the 2 selected products
The components fetches the id of the products inside the comparison object
The product's ids have been set to get all the details of the product
*/

const ComparisonDetail = () => {
  const { id } = useParams();
  const [comparison, setComparison] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComparison = async () => {
      try {
        const { data } = await axiosReq.get(`/comparisons/${id}/`);
        setComparison(data);

        const productRequests = data.products.map((productId) =>
          axiosReq.get(`/products/${productId}/`)
        );

        const productResponses = await Promise.all(productRequests);
        setProducts(productResponses.map((res) => res.data));
      } catch (err) {
        setError("Failed to load comparison.");
      } finally {
        setLoading(false);
      }
    };

    fetchComparison();
  }, [id]);

  const renderContent = () => {
    try {
      if (loading) return <Asset spinner />;
      if (error) throw new Error(error);
      if (!comparison) throw new Error("No comparison found.");
// Renders two rows in any device displaying the fetched comparison
      return (
        <Container className={styles.container}>
          <h2 className={styles.title}>Product Comparison</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={6} lg={6} sm={6} xs={6}>
                <Product {...product} productPage={false} />
              </Col>
            ))}
          </Row>
        </Container>
      );
    } catch (err) {
      return <p>{err.message}</p>;
    }
  };

  return renderContent();
};

export default ComparisonDetail;
