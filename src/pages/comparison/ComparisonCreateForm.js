import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Product from "../products/Product";
import NoRes from "../../assets/nores.jpg.jpg";
import Asset from "../../components/Asset";
import styles from "../../styles/Comparison.module.css";
import useCategories from "../../hooks/useCategories";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/FetchNext";
// Creating a comparison form
/*This form displays all the products that we can select
its also possible to filter and sort products by query to make it easir for the user
*/
function ComparisonCreateForm() {
  const [products, setProducts] = useState({ results: [] });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  // Fetch products when filter, query, or sort options change
  // The change has a timer to let the use have the time to type and dont refetch at every key stroke
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sortQuery = sortOption ? `&ordering=${sortOption}` : "";
        const categoryQuery = selectedCategory
          ? `&category=${selectedCategory}`
          : "";
        const searchQuery = query ? `&search=${query}` : "";

        const { data } = await axiosReq.get(
          `/products/?${searchQuery}${categoryQuery}${sortQuery}`
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
  }, [query, selectedCategory, sortOption]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
// Function to make sure the user is only able to select 2 items
// Displays feedbacks once the user try for more.
  const handleSelectProduct = (product) => {
    const isSelected = selectedProducts.includes(product.id);

    if (selectedProducts.length >= 2 && !isSelected) {
      setErrors("You can only compare two products at a time.");
      return;
    }

    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((id) => id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product.id]);
      setErrors(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedProducts.length !== 2) {
      setErrors("You must select exactly two products.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axiosReq.post("/comparisons/", {
        products: selectedProducts,
      });
      history.push(`/comparisons/${data.id}`);
    } catch (err) {
      //   console.log(err);
      setErrors("Failed to create comparison. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors]);
// Renders the full component/form 
// Button is disabled on submission to prevent extra submissions.
  return (
    <Container className={styles.comparisonFormContainer}>
      <h2>Create a Comparison</h2>
      {errors && (
        <Alert variant="danger" className={styles.stickyAlert}>
          {errors}
        </Alert>
      )}
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
                {products.results.map((product) => {
                  const isSelected = selectedProducts.includes(product.id);
                  return (
                    <Col
                      key={product.id}
                      xs={12}
                      sm={6}
                      lg={4}
                      className="mb-3"
                    >
                        {/* undefined doesnt show the props for better layout */}
                      <Product
                        {...product}
                        description={undefined}
                        features={undefined}
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
            </InfiniteScroll>
          </Row>
        ) : (
          <Container className="text-center">
            <Asset src={NoRes} message="No products found" />
          </Container>
        )
      ) : (
        <Container className="text-center">
          <Asset spinner />
        </Container>
      )}
    {/* shows the compare button only when 2 products are selected */}
      {selectedProducts.length === 2 && (
        <div className={styles.stickyCompareButtonContainer}>
          <Button
            type="submit"
            className={styles.stickyCompareButton}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Comparing..." : "Compare"}
          </Button>
        </div>
      )}
    </Container>
  );
}

export default ComparisonCreateForm;
