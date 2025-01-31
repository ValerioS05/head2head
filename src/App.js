import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ProductCreateForm from "./pages/products/ProductsForms";
import ProductPage from "./pages/products/ProductPage";
import ProductsPage from "./pages/products/ProductsPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/products" render={() => <ProductsPage message="No results for your search,try other keywords."/>} />
          <Route
            exact
            path="/product/create"
            render={() => <ProductCreateForm />}
          />
          <Route exact path="/products/:id" render={() => <ProductPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
