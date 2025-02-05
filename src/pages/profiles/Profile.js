import React from 'react';
import { useParams } from 'react-router-dom';
import useUserProfile from '../../hooks/useUserProfile';
import { Card, Col, Row, Container } from 'react-bootstrap';
import Asset from '../../components/Asset';
import styles from '../../styles/Profile.module.css';

const Profile = () => {
  const { id } = useParams();
  const { isStaff, profilePicture, profileData, loading, error } =
    useUserProfile(id);

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
                <div className={styles.Username}>{profileData.owner}</div>
                <div className={styles.Text}>
                  <div>{profileData.location}</div>
                  <div>{profileData.bio}</div>
                </div>

                <div className={styles.Favourites}>
                  <h5>Favourites</h5>
                  <p>
                    {profileData.favourites && profileData.favourites.length > 0
                      ? "My favourites."
                      : "No favourites yet."}
                  </p>
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
