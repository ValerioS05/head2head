import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image, Alert } from "react-bootstrap";

import styles from "../../styles/ProductsForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import Asset from "../../components/Asset";
import useCategories from "../../hooks/useCategories";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { validateImage } from "../../utils/ValidateImage";

const ProductsEditForm = () => {
  const [errors, setErrors] = useState({});
  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    description: "",
    price: "",
    location: "",
    image: "",
    keywords: "",
    features: "",
  });

  const [imageError, setImageError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    productName,
    category,
    description,
    price,
    location,
    image,
    keywords,
    features,
  } = productData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/products/${id}/`);
        setProductData({
          productName: data.name,
          category: data.category,
          description: data.description,
          price: data.price,
          location: data.location,
          image: data.image
            ? `https://res.cloudinary.com/drsvdv8rb/${data.image}`
            : "",
          keywords: data.keywords,
          features: data.features,
        });
      } catch (err) {
       // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const validationError = validateImage(file);
      if (validationError) {
        setImageError(validationError);
      } else {
        setImageError(null);
        URL.revokeObjectURL(image);
        setProductData({
          ...productData,
          image: URL.createObjectURL(file),
        });
      }
    }
  };

  const { categories, loading, error } = useCategories();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (imageError) {
      return;
    }
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("keywords", keywords);
    formData.append("features", features);

    if (imageInput.current && imageInput.current.files.length > 0) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/products/${id}/`, formData);
      history.push(`/products/${id}/`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const productFields = (
    <div>
      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="productName"
          value={productName}
          onChange={handleChange}
        />
        {errors?.name?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        {loading ? (
          <Asset loading message="Loading categories..." />
        ) : error ? (
          <Asset message="Failed to load categories. Please try again." />
        ) : (
          <Form.Control
            as="select"
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option value="">Select a Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </Form.Control>
        )}
        {errors?.category?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
        {errors?.description?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
        {errors?.price?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
        {errors?.location?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Keywords</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="keywords"
          value={keywords}
          onChange={handleChange}
        />
        {errors?.keywords?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Features</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="features"
          value={features}
          onChange={handleChange}
        />
        {errors?.features?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12} md={12} className="py-2">
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className={styles.CenterText}>
              <figure>
                <Image className={`${appStyles.Image}`} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${styles.Btn}`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              {imageError && <Alert variant="danger">{imageError}</Alert>}
              <div className="d-flex justify-content-center mt-2">
                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                  className={styles.ImgInput}
                />
              </div>
            </Form.Group>

            {productFields}
          </Container>
        </Col>
      </Row>

      <div className="text-center">
        <Button
          className={`${btnStyles.Button} ${styles.Btn}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button
          className={`${btnStyles.Button} ${styles.Btn}`}
          type="submit"
          disabled={isSubmitting || imageError }
        >
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </div>
    </Form>
  );
};

export default ProductsEditForm;
