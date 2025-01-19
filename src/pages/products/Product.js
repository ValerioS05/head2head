import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
  return (
    <Card>
        <Card.Body>
            <Media className='align-items-center justify-content-between'>
                <Link to={`/profiles/${owner}`}>
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>{created_at}</span>
                    {is_owner && productPage && "..."}
                </div>
            </Media>
        </Card.Body>
        <Card.Img src={image} alt={name} />
    </Card>
)
};

export default Product;