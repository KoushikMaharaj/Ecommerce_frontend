/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Joi from "joi-browser";
import "./loginForm.css";
import image from "./images/computer-shoppe.jpg";
import service from "../../services/userService";

/* import RegistrationForm from "./../RegistrationComponent/registrationForm"; */

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { userEmail: "", userPassword: "" },
      errors: {},
      loginError: "",
    };
  }

  schema = {
    userEmail: Joi.string().required().label("Email"),
    userPassword: Joi.string().min(3).max(10).required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.user, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    else {
      service
        .userLogin(this.state.user)
        .then((response) => {
          window.sessionStorage.setItem("user", JSON.stringify(response.data));
          if (response.data.role === "ADMIN") {
            window.location.assign("/admin");
          } else {
            window.location.assign("/");
          }
        })
        .catch((ex) => {
          const loginError = "Please Check credentials";
          this.setState({ loginError });
        });
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  render() {
    const { user, errors, loginError } = this.state;
    return (
      <div className="container signIn">
        {loginError && (
          <div className="alert alert-danger " id="error1">
            {loginError}
          </div>
        )}
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-8">
            <div className="card signIn-card">
              <img
                src={image}
                className="img-Fluid imgCenter signIn-img"
                alt="login-image"
              />
              <form onSubmit={this.handleSubmit} className="signIn-form">
                <div className="form-group">
                  <input
                    type="Email"
                    className="form-control"
                    id="emailInput"
                    name="userEmail"
                    placeholder="Email"
                    value={user.userEmail}
                    onChange={this.handleChange}
                  />
                  {errors.userEmail && (
                    <div className="alert alert-danger " id="error1">
                      {errors.userEmail}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    name="userPassword"
                    placeholder="Password"
                    value={user.userPassword}
                    onChange={this.handleChange}
                  />
                  {errors.userPassword && (
                    <div className="alert alert-danger" id="error1">
                      {errors.userPassword}
                    </div>
                  )}
                </div>
                <button className="btn signIn-btn ">
                  <i>
                    <b>Sign In</b>
                  </i>
                </button>
                <div style={{ marginLeft: "19rem" }}>
                  <a href="/setpassword">Forget Password?</a>
                </div>
              </form>
            </div>

            <a href="/register">
              <button className="Register">
                <i>
                  <b>Sign Up</b>
                </i>
              </button>
            </a>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
