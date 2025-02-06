import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import "./api/axiosDefaults";
import Home from "./pages/home/Home";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ProductCreateForm from "./pages/products/ProductsForms";
import ProductPage from "./pages/products/ProductPage";
import ProductsPage from "./pages/products/ProductsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import useUserProfile from "./hooks/useUserProfile";
import ProductsEditForm from "./pages/products/ProductsEditForm";
import Profile from "./pages/profiles/Profile";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import PasswordForm from "./pages/profiles/PasswordForm";
import ComparisonCreateForm from "./pages/comparison/ComparisonCreateForm";
function App() {
  const currentUser = useCurrentUser(); // Get current user
  const { isStaff, loading, error } = useUserProfile(currentUser?.profile_id);

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/products"
            render={() => (
              <ProductsPage message="No results for your search, try other keywords." />
            )}
          />
          <Route
            exact
            path="/product/create"
            render={() =>
              isStaff ? <ProductCreateForm /> : <Redirect to="/" />
            }
          />
          <Route exact path="/products/:id" render={() => <ProductPage />} />
          <Route exact path="/products/:id/edit" render={() => isStaff ? <ProductsEditForm /> : <Redirect to="/" /> } />
          <Route exact path="/profiles/:id" render={() => <Profile />} />
          <Route exact path="/profiles/:id/edit" render={() =><ProfileEditForm /> } />
          <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm /> } />
          <Route exact path="/profiles/:id/edit/password/" render={() => <PasswordForm /> } />
          <Route exact path="/comparisons/create" render={() => <ComparisonCreateForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
