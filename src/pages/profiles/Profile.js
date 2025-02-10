import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useUserProfile from "../../hooks/useUserProfile";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import Product from "../products/Product";
import styles from "../../styles/Profile.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Profile = () => {
  const { id } = useParams();
  const { profilePicture, profileData, loading, error } = useUserProfile(id);

  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [fetchingProducts, setFetchingProducts] = useState(true);
  const currentUser = useCurrentUser();

  useEffect(() => {
    setFavouriteProducts([]);
    setFetchingProducts(true);
  }, [id]);

  useEffect(() => {
    if (!profileData || !profileData.favourites) return;

    if (profileData.favourites.length > 0) {
      const fetchProducts = async () => {
        try {
          let url = "/products/";
          let allProducts = [];
          let nextPage = url;
          while (nextPage) {
            const response = await axiosReq.get(nextPage, {
              params: { ids: profileData.favourites.join(",") },
            });
            const filteredProducts = response.data.results.filter((product) =>
              profileData.favourites.includes(product.id)
            );

            allProducts = [...allProducts, ...filteredProducts];
            nextPage = response.data.next;
          }
          setFavouriteProducts(allProducts);
        } catch (err) {
          console.error("Error fetching products:", err);
        } finally {
          setFetchingProducts(false);
        }
      };
      fetchProducts();
    } else {
      setFetchingProducts(false);
    }
  }, [profileData]);

  return (
    <Container className={styles.ProfileContainer}>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Asset spinner />
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : !profileData ? (
        <div>Profile not found.</div>
      ) : (
        <Row className="justify-content-center">
          <Col>
            <Card className={styles.Card}>
              <Card.Body>
                <div>
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className={styles.ProfilePicture}
                  />
                </div>
                {currentUser?.profile_id === parseInt(id) && (
                  <Link
                    to={`/profiles/${id}/edit`}
                    className="edit-profile-link"
                  >
                    <i className="fas fa-edit" /> Edit Profile
                  </Link>
                )}
                <div className={styles.Username}>{profileData.owner}</div>
                <div className={styles.Text}>
                  <div>{profileData.location}</div>
                  <div>{profileData.bio}</div>
                </div>

                <div className={styles.Favourites}>
                  <h5>My favourites</h5>
                  {fetchingProducts ? (
                    <></>
                  ) : favouriteProducts.length > 0 ? (
                    <Row>
                      {favouriteProducts.map((product, index) => {
                        const { description, features, ...productInfo } =
                          product;
                        return (
                          <Col
                            key={`${product.id}-${index}`}
                            sm={12}
                            md={6}
                            lg={4}
                          >
                            <Product {...productInfo} productPage={false} />
                          </Col>
                        );
                      })}
                    </Row>
                  ) : (
                    <></>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profile;
