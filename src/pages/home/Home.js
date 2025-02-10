import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Styles from "../../styles/Home.module.css";
import defaultImage from "../../assets/defaulth2h.jpg";

const Home = () => {
  const currentUser = useCurrentUser();

  return (
    <Container className={Styles.WelcomeContainer}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className={Styles.WelcomeTitle}>
            {currentUser
              ? `Welcome, ${currentUser.username}!`
              : "Welcome to Our Comparison Site!"}
          </h1>

          <div className={Styles.ImageContainer}>
            <img
              src={defaultImage}
              alt="Comparison site banner"
              className={Styles.WelcomeImage}
            />
          </div>

          {currentUser ? (
            <p className={Styles.WelcomeText}>
              Explore our products and make decisions with our comparison tool.
              You can find and compare products across different categories,
              leave a review, and share ideas.
            </p>
          ) : (
            <>
              <p className={Styles.WelcomeText}>
                Sign up to explore the best products and start comparing them
                with others.
              </p>
              <p>Join now!</p>
              <div className={Styles.ButtonContainer}>
                <Link to="/signup">
                  <Button
                    variant="primary"
                    size="lg"
                    className={Styles.StartButton}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </>
          )}

          {currentUser && (
            <div className={Styles.ButtonContainer}>
              <Link to="/products">
                <Button
                  variant="primary"
                  size="lg"
                  className={Styles.StartButton}
                >
                  Explore Products
                </Button>
              </Link>
              <Link to="/comparisons/create">
                <Button
                  variant="secondary"
                  size="lg"
                  className={Styles.StartButton}
                >
                  Compare Products
                </Button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
