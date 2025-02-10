import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom";
import ProfileImage from "../../components/ProfileImage";
import useCloudinaryImageUrl from "../../hooks/useCloudinaryImageUrl";
import useCategories from "../../hooks/useCategories";
import useUserProfile from "../../hooks/useUserProfile";
import VoteForm from "../../components/VoteForm";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Product.module.css";
import { EditMenu } from "../../components/EditMenu";

const Product = (props) => {
  const {
    id,
    name,
    category,
    description,
    price,
    average_rating,
    image,
    features,
    owner,
    location,
    created_at,
    profile_id,
    profile_picture,
    vote_id,
    productPage,
  } = props;

  const [product, setProduct] = useState({
    ...props,
    average_rating: average_rating || 0,
  });

  const currentUser = useCurrentUser();
  const { isStaff: isCurrentUserStaff, loading: loadingCurrentUser } =
    useUserProfile(currentUser?.profile_id);
  const cloudinaryUrl = useCloudinaryImageUrl(image);
  const { categories } = useCategories();
  const categoryName = categories.find((cat) => cat.id === category)?.name;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/products/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/products/${id}/`);
      history.push("/products/");
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchUpdatedProduct = async () => {
    try {
      const { data } = await axiosReq.get(`/products/${id}/`);
      setProduct(data);
    } catch (err) {
      console.error("Error fetching updated product:", err);
    }
  };

  useEffect(() => {
    if (props.average_rating) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        average_rating: props.average_rating,
      }));
    }
  }, [props.average_rating]);

  return (
    <Card className={styles.card}>
      <Media className="align-items-center justify-content-between">
        <Link to={`/profiles/${profile_id}`} className={styles.profileLink}>
          <ProfileImage
            src={profile_picture}
            height={40}
            className={styles.profileImage}
          />
          <span>{owner}</span>
        </Link>
        <div className={styles.EditMenu}>
          {!loadingCurrentUser && isCurrentUserStaff && productPage && (
            <EditMenu handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
      </Media>

      <Card.Body className={styles.cardBody}>
        <div className={styles.cardContent}>
          <div className={styles.cardImgContainer}>
            <Link to={`/products/${id}`}>
              <Card.Img
                src={cloudinaryUrl}
                alt={name}
                className={styles.cardImg}
              />
            </Link>
          </div>

          <div className={styles.productDetailsContainer}>
            <Link to={`/products/${id}`}>
              <Card.Title className={styles.cardTitle}>{name}</Card.Title>
            </Link>
            {categoryName && (
              <Card.Text className={styles.cardText}>
                <strong>Category:</strong> {categoryName}
              </Card.Text>
            )}
            {price && (
              <Card.Text className={styles.cardText}>
                <strong>Price:</strong> {price}£
              </Card.Text>
            )}
            {location && (
              <Card.Text className={styles.cardText}>
                <strong>Location:</strong> {location}
              </Card.Text>
            )}
            {features && (
              <Card.Text className={styles.cardText}>
                <strong>Features:</strong> {features}
              </Card.Text>
            )}
            {product.average_rating !== undefined && (
              <div className={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fa fa-star ${
                      index < Math.floor(product.average_rating)
                        ? "text-warning"
                        : "text-muted"
                    }`}
                    style={{ fontSize: "10px" }}
                  ></i>
                ))}
                <span className={styles.ratingNumber}>
                  {product.average_rating}
                </span>
              </div>
            )}
          </div>

          {description && (
            <div className={styles.descriptionContainer}>
              <Card.Text className={styles.descriptionLabel}>
                <strong>Description:</strong>
              </Card.Text>
              <Card.Text className={styles.descriptionText}>
                {description}
              </Card.Text>
              <i className="fas fa-calendar-alt"></i>
              <span>{created_at}</span>
            </div>
          )}
        </div>

        {currentUser && productPage && (
          <VoteForm
            productId={id}
            existingVote={vote_id}
            setProduct={setProduct}
            fetchUpdatedProduct={fetchUpdatedProduct}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
