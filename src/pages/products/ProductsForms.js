import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

import Upload from "../../assets/upload.jpeg";

import styles from "../../styles/ProductsForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import Asset from "../../components/Asset";
import useCategories from "../../hooks/useCategories";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function ProductCreateForm() {
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
      URL.revokeObjectURL(image);
      setProductData({
        ...productData,
        image: URL.createObjectURL(event.target.files[0]),
      });
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
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
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
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
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
        <Button className={`${btnStyles.Button} ${styles.Btn}`} type="submit">
          Create
        </Button>
      </div>
    </Form>
  );
}

export default ProductCreateForm;
