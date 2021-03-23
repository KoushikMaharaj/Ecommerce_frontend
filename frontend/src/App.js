//import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import LoginForm from "./components/LoginComponent/loginForm";
import RegistrationForm from "./components/RegistrationComponent/RegistrationForm";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import NavBar from "./components/Navigation Component/NavBar";
import AdminComponent from "./components/AdminComponents/AdminComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import Product from "./components/ProductComponent/Product";
import ProductDetails from "./components/ProductComponent/ProductDetails";
import ShowCart from "./components/ProductComponent/ShowCart";
import ProductsByCategory from "./components/ProductComponent/ProductsByCategory";
import AboutUs from "./components/AboutUsComponent/AboutUs";
import ContactUs from './components/ContactUsComponent/ContactUs';
import ProductsBySubCategory from './components/ProductComponent/ProductsBySubCategory';

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
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route
            exact
            path="/product/category/:ctgName"
            component={ProductsByCategory}
          />
          <Route
            exact
            path="/product/subcategory/:subCtgName"
            component={ProductsBySubCategory}
          />
        </Switch>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
