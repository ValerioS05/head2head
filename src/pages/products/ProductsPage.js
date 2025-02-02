import React, { useEffect, useState } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Product from "./Product";
import NoRes from "../../assets/nores.jpg.jpg";
import Asset from "../../components/Asset";
import styles from "../../styles/ProductsPage.module.css";

function ProductsPage({ message, filter = "" }) {
  const [products, setProducts] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");

  // Fetch products when filter or query changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/products/?${filter}search=${query}`
        );
        setProducts(data);
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setLoaded(false);

    const timer = setTimeout(() => {
      fetchProducts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query]);


  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container className={appStyles.Content}>
      <i className={`fas fa-search ${styles.SearchIcon}`} />
      <Form
        className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}
      >
        <Form.Control
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearchChange}
        />
      </Form>
      {loaded ? (
        products.results.length ? (
          <Row className="g-4">
            {products.results.map(
              ({ description, features, location, ...rest }) => (
                <Col key={rest.id} xs={12} sm={6} lg={4}>
                  <Product {...rest} setProducts={setProducts} />
                </Col>
              )
            )}
          </Row>
        ) : (
          <Container className="text-center">
            <Asset src={NoRes} message={message} />
          </Container>
        )
      ) : (
        <Container className="text-center">
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default ProductsPage;
