import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProfileImage from '../../components/ProfileImage';
import useCloudinaryImageUrl from '../../hooks/useCloudinaryImageUrl';

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

    return (
        <Card>
          <Card.Body>
            <Media className="align-items-center justify-content-between">
              <Link to={`/profiles/${profile_id}`}>
                <ProfileImage src={profile_picture} height={55} />
                {owner}
              </Link>
              <div className="d-flex align-items-center">
                <span>{created_at}</span>
                {console.log("is_owner:", is_owner, "productPage:", productPage)}
                {is_owner && productPage && "asdfasdfasdfasdf."}
              </div>
            </Media>
          </Card.Body>
          <Card.Img src={cloudinaryUrl} alt={name} />
        </Card>
      );
};

export default Product;