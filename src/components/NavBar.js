import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import ProfileImage from "./ProfileImage";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import useUserProfile from "../hooks/useUserProfile";
import { removeTokenTimestamp } from "../utils/tokenTimeStamp";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  const { isStaff, profilePicture, loading, error } = useUserProfile(
    currentUser?.profile_id
  );

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const addProductIcon = isStaff && (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/product/create"
    >
      <i className="fas fa-plus-square"></i>Add product
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/products"
      >
        <i className="fas fa-box-open"></i>Products
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/comparisons/create"
      >
        <i className="fas fa-exchange-alt"></i>Compare
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.ProfilePicture}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        {loading ? (
          <span>....</span>
        ) : error ? (
          <span>Error</span>
        ) : (
          <ProfileImage src={profilePicture} text="Profile" height={40} />
        )}
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              height="40"
              className={styles.NavBarLogo}
            />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addProductIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
          className={styles.NavToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
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
