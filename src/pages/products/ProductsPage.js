import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Product from "./Product";
import NoRes from "../../assets/nores.jpg.jpg";
import Asset from "../../components/Asset";
import styles from "../../styles/ProductsPage.module.css";
import useCategories from "../../hooks/useCategories";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/FetchNext";

function ProductsPage({ message, filter = "" }) {
  const [products, setProducts] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sortQuery = sortOption ? `&ordering=${sortOption}` : '';
        const { data } = await axiosReq.get(
          `/products/?${filter}search=${query}&category=${selectedCategory}${sortQuery}`
        );
        setProducts(data);
        setLoaded(true);
      } catch (err) {
        // console.log("Error fetching products", err);
      }
    };

    setLoaded(false);

    const timer = setTimeout(() => {
      fetchProducts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, selectedCategory, sortOption]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <Container className={appStyles.Content}>
      <Row className="mb-3 align-items-center mx-0">
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="d-flex align-items-center"
        >
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
        </Col>

        <Col xs={12} sm={12} md={4} lg={4}>
          <Form className={styles.SearchBar}>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              aria-label="Category filter"
            >
              <option value="">All Categories</option>
              {categoriesLoading ? (
                <option>Loading categories...</option>
              ) : categoriesError ? (
                <option>Error loading categories</option>
              ) : (
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              )}
            </Form.Control>
          </Form>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4}>
          <Form className={styles.SearchBar}>
            <Form.Control
              as="select"
              value={sortOption}
              onChange={handleSortChange}
              aria-label="Sort by"
            >
              <option value="">Sort by</option>
              <option value="price">Price (low to high)</option>
              <option value="-price">Price (high to low)</option>
              <option value="created_at">Date (oldest first)</option>
              <option value="-created_at">Date (newest first)</option>
            </Form.Control>
          </Form>
        </Col>
      </Row>

      {loaded ? (
        products.results.length ? (
          <Row className={`g-4 mx-0 ${styles.ProductRow}`}>
            <InfiniteScroll
              dataLength={products.results.length}
              next={() => fetchMoreData(products, setProducts)}
              hasMore={!!products.next}
              loader={<Asset spinner />}
              className="w-100"
            >
              <Row className="g-4 mx-0">
                {products.results.map(
                  ({ description, features, location, ...rest }) => (
                    <Col key={rest.id} xs={12} sm={6} lg={4}>
                      <Product {...rest} setProducts={setProducts} />
                    </Col>
                  )
                )}
              </Row>
            </InfiniteScroll>
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
