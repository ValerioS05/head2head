import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import ProfileImage from "./ProfileImage";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [profileData, setProfileData] = useState(null);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loadProfile = async () => {
      if (currentUser?.profile_id) {
        try {
          const { data } = await axios.get(`/profiles/${currentUser.profile_id}/`);
          setProfileData(data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadProfile();
  }, [currentUser]);

  const addProductIcon = (
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/product/create">
      <i className="fas fa-plus-square"></i>Add product
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/products">
        <i className="fas fa-cogs"></i>Products
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/comparisons">
        <i className="fas fa-exchange-alt"></i>Compare Products
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
        <ProfileImage src={profileData?.profile_picture} text="" height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addProductIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
