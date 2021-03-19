import "./App.css";
import LoginForm from "./components/LoginComponent/loginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from "./components/RegistrationComponent/RegistrationForm";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import NavBar from "./components/Navigation Component/NavBar";
import AdminComponent from "./components/AdminComponents/AdminComponent";
import FooterComponent from "./components/Footer Component/FooterComponent";
import React from "react";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import Product from "./components/ProductComponent/Product";
import "bootstrap/dist/css/bootstrap.css";



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
          
        </Switch>
      </Router>
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
