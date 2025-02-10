import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import Upload from "../../assets/upload.jpeg";

import styles from "../../styles/ProductsForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import Asset from "../../components/Asset";
import useCategories from "../../hooks/useCategories";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import { validateImage } from "../../utils/ValidateImage";

const ProductCreateForm = () => {
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
  const [isImageValid, setIsImageValid] = useState(true); // Track image validity

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

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];

      const validationError = validateImage(file);
      if (validationError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: [validationError],
        }));
        setIsImageValid(false);
        return;
      }

      URL.revokeObjectURL(image);
      setProductData({
        ...productData,
        image: URL.createObjectURL(file),
      });
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: [],
      }));
      setIsImageValid(true);
    }
  };

  const { categories, loading, error } = useCategories();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", productName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("image", imageInput.current.files[0] || "default_h2h");
    formData.append("keywords", keywords);
    formData.append("features", features);

    try {
      const { data } = await axiosReq.post("/products/", formData);
      history.push(`/products/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const productFields = (
    <div>
      <Form.Group>
        <Form.Label htmlFor="productName">Product Name</Form.Label>
        <Form.Control
          type="text"
          id="productName"
          name="productName"
          value={productName}
          onChange={handleChange}
        />
        {errors?.name?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="category">Category</Form.Label>
        {loading ? (
          <Asset loading message="Loading categories..." />
        ) : error ? (
          <Asset message="Failed to load categories. Please try again." />
        ) : (
          <Form.Control
            as="select"
            id="category"
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
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
        {errors?.description?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="price">Price</Form.Label>
        <Form.Control
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        {errors?.price?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="location">Location</Form.Label>
        <Form.Control
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleChange}
        />
        {errors?.location?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="keywords">Keywords</Form.Label>
        <Form.Control
          as="textarea"
          id="keywords"
          rows={3}
          name="keywords"
          value={keywords}
          onChange={handleChange}
        />
        {errors?.keywords?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="features">Features</Form.Label>
        <Form.Control
          as="textarea"
          id="features"
          rows={3}
          name="features"
          value={features}
          onChange={handleChange}
        />
        {errors?.features?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
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
              {image ? (
                <>
                  <figure>
                    <Image
                      className={`${appStyles.Image}`}
                      src={image}
                      rounded
                    />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${styles.Btn}`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className={`d-flex justify-content-center ${styles.ImgContainer}`}
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

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
            {errors?.image?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

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
          disabled={!isImageValid}
        >
          Create
        </Button>
      </div>
    </Form>
  );
};

export default ProductCreateForm;
