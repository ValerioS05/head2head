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
import ComparisonDetail from "./pages/comparison/ComparisonDetail";
import Asset from "./components/Asset";
import NotFound from "./components/NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Set loading state
  const currentUser = useCurrentUser(); // Get current user
  const { isStaff } = useUserProfile(currentUser?.profile_id); // Get is staff member

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 seconds delay give time to load

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, []);

  // If loading show asset 
  if (isLoading) {
    return <Asset spinner />;
  }

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          {/* Public Routes */}
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />

          {/* Product Routes */}
          <Route
            exact
            path="/products"
            render={() =>
              currentUser ? (
                <ProductsPage message="No results for your search, try other keywords." />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
          <Route
            exact
            path="/product/create"
            render={() =>
              currentUser && isStaff ? (
                <ProductCreateForm />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
          <Route
            exact
            path="/products/:id"
            render={() =>
              currentUser ? <ProductPage /> : <Redirect to="/signin" />
            }
          />
          <Route
            exact
            path="/products/:id/edit"
            render={() =>
              currentUser && isStaff ? (
                <ProductsEditForm />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />

          {/* Profile Routes */}
          <Route
            exact
            path="/profiles/:id"
            render={() =>
              currentUser ? <Profile /> : <Redirect to="/signin" />
            }
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() =>
              currentUser ? <ProfileEditForm /> : <Redirect to="/signin" />
            }
          />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() =>
              currentUser ? <UsernameForm /> : <Redirect to="/signin" />
            }
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() =>
              currentUser ? <PasswordForm /> : <Redirect to="/signin" />
            }
          />

          {/* Comparison Routes */}
          <Route
            exact
            path="/comparisons/create"
            render={() =>
              currentUser ? <ComparisonCreateForm /> : <Redirect to="/signin" />
            }
          />
          <Route
            exact
            path="/comparisons/:id"
            render={() =>
              currentUser ? <ComparisonDetail /> : <Redirect to="/signin" />
            }
          />

          {/* 404 page */}
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
