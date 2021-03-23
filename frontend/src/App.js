//import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import LoginForm from "./components/LoginComponent/loginForm";
import RegistrationForm from "./components/RegistrationComponent/RegistrationForm";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import NavBar from "./components/Navigation Component/NavBar";
import AdminComponent from "./components/AdminComponents/AdminComponent";
import FooterComponent from "./components/Footer Component/FooterComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import Product from "./components/ProductComponent/Product";
import ProductDetails from "./components/ProductComponent/ProductDetails";
import ShowCart from "./components/ProductComponent/ShowCart";
import ProductsByCategory from "./components/ProductComponent/ProductsByCategory";

function App() {
  /* return <RegistrationForm/>; */
  /*  return (
    <Router>
      <Link to="/login">Login</Link>
      <Route exact path="/login" component={LoginForm} />
    </Router>
  ); */
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/admin" component={AdminComponent} />
          <Route exact path="/user/profile" component={ProfileComponent} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/details/:id" component={ProductDetails} />
          <Route exact path="/showcart" component={ShowCart} />
          <Route
            exact
            path="/product/category"
            component={ProductsByCategory}
          />
        </Switch>
      </Router>
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
