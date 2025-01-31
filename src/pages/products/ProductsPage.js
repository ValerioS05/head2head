import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/ProductsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Product from "./Product";

import NoRes from "../../assets/nores.jpg.jpg";
import Asset from "../../components/Asset";

function ProductsPage({ message, filter = "" }) {
  const [products, setProducts] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosReq.get(`/products/?${filter}`);
        setProducts(data);
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setLoaded(false);
    fetchProducts();
  }, [filter]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {loaded ? (
          <>
            {products.results.length
              ? products.results.map((product) => (
                  <Product
                    key={product.id}
                    {...product}
                    setProducts={setProducts}
                  />
                ))
              : <Container className={appStyles.Content}>
                    <Asset src={NoRes} message={message}/>
                </Container>}
          </>
        ) : (
            <Container>
                <Asset spinner />
            </Container>
        )}
      </Col>
    </Row>
  );
}

export default ProductsPage;
