import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProfileImage from '../../components/ProfileImage';
import useCloudinaryImageUrl from '../../hooks/useCloudinaryImageUrl';
import useCategories from '../../hooks/useCategories';

import styles from '../../styles/Product.module.css';

// Func Component to display  a product
const Product = (props) => {
  // Destructured props 
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
    keywords,
    productPage,
    profile_id,
    profile_picture,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const cloudinaryUrl = useCloudinaryImageUrl(image);
  const { categories } = useCategories();

  const categoryName = categories.find((cat) => cat.id === category)?.name;

  return (
    <Card className={styles.card}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <ProfileImage src={profile_picture} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{created_at}</span>
            {is_owner && productPage && "asdfasdfasdfasdf."}
          </div>
        </Media>
      </Card.Body>

      <Link to={`/products/${id}`}>
        <Card.Img src={cloudinaryUrl} alt={name} />
      </Link>

      <Card.Body className={styles.cardBody}>
        {average_rating && (
          <div className={styles.ratingContainer}>
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa fa-star ${
                  index < average_rating ? "text-warning" : "text-muted"
                }`}
                style={{ fontSize: "20px" }}
              ></i>
            ))}
            <span className={styles.ratingNumber}>{average_rating}</span>
          </div>
        )}
        <div className={styles.bottomContent}>
          <div className={styles.leftColumn}>
            {name && <Card.Title className={styles.cardTitle}>{name}</Card.Title>}
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
          </div>
          <div className={styles.rightColumn}>
            {description && (
              <Card.Text className={styles.descriptionText}>
                <strong>Description:</strong>
                <span>{description}</span>
              </Card.Text>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;