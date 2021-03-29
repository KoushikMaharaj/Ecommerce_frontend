import React, { Component } from "react";
import Joi from "joi-browser";
import "./RegistrationForm.css";
import service from "../../services/userService.js";

class RegistrationForm extends Component {
  state = {
    user: {
      userName: "",
      userEmail: "",
      userPassword: "",
      userAddr: {
        houseNo: "",
        area: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      },
      userContact: "",
      role: "CUSTOMER",
    },
    errors: {},
    regiError: "",
  };

  schema = {
    userName: Joi.string().required().label("Name"),
    userEmail: Joi.string().required().label("Email"),
    userPassword: Joi.string()
      .min(3)
      .max(10)
      .alphanum()
      .required()
      .label("Password"),
    userContact: Joi.string().required().min(10).max(10).label("Contact"),
    userAddr: Joi.object(),
    houseNo: Joi.string(),
    area: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    pincode: Joi.string(),
    role: Joi.string(),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.user, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    console.log("validate: ", errors);

    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    else {
      service
        .userRegister(this.state.user)
        .then((response) => {
          if (response.data.role === "ADMIN") {
            window.location.assign("/admin");
          } else {
            window.location.assign("/login");
          }
        })
        .catch((ex) => {
          const error = "Email is already taken";
          this.setState({ regiError: error });
        });
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  handleAddrChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user.userAddr[input.name] = input.value;
    this.setState({ user });
  };

  render() {
    const { user, errors, regiError } = this.state;
    return (
      <React.Fragment>
        {regiError && (
          <div className="alert alert-danger" id="error2">
            {regiError}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-8 " id="main-class1">
              <h2>
                <u>Register</u>
              </h2>
              <h4>Create Your Account. It's free only takes a minute</h4>
              <div className="row">
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form1"
                    placeholder="Name"
                    name="userName"
                    value={user.userName}
                    onChange={this.handleChange}
                  />
                  {errors.userName && (
                    <div className="alert alert-danger" id="error2">
                      {errors.userName}
                    </div>
                  )}
                </div>

                <div className="col center">
                  <input
                    type="text"
                    className="form-control form1"
                    placeholder="Email"
                    name="userEmail"
                    value={user.userEmail}
                    onChange={this.handleChange}
                  />
                  {errors.userEmail && (
                    <div className="alert alert-danger " id="error2">
                      {errors.userEmail}
                    </div>
                  )}
                </div>
                <div className="col center">
                  <input
                    type="password"
                    className="form-control form1"
                    placeholder="Password"
                    name="userPassword"
                    value={user.userPassword}
                    onChange={this.handleChange}
                  />
                  {errors.userPassword && (
                    <div className="alert alert-danger " id="error2">
                      {errors.userPassword}
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form2houseno"
                    placeholder="House No"
                    name="houseNo"
                    value={user.userAddr.houseNo}
                    onChange={this.handleAddrChange}
                  />
                  {errors.houseNo && (
                    <div className="alert alert-danger " id="error2">
                      {errors.houseNo}
                    </div>
                  )}
                </div>
                <div className="col center">
                  <textarea
                    type="text"
                    className="form-control form3"
                    placeholder="Area"
                    name="area"
                    value={user.userAddr.area}
                    onChange={this.handleAddrChange}
                  />
                  {errors.area && (
                    <div className="alert alert-danger " id="error2">
                      {errors.area}
                    </div>
                  )}
                </div>
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form2"
                    placeholder="City"
                    name="city"
                    value={user.userAddr.city}
                    onChange={this.handleAddrChange}
                  />
                  {errors.city && (
                    <div className="alert alert-danger " id="error2">
                      {errors.city}
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form2"
                    placeholder="State"
                    name="state"
                    value={user.userAddr.state}
                    onChange={this.handleAddrChange}
                  />
                  {errors.state && (
                    <div className="alert alert-danger " id="error2">
                      {errors.state}
                    </div>
                  )}
                </div>
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form2"
                    placeholder="Country"
                    name="country"
                    value={user.userAddr.country}
                    onChange={this.handleAddrChange}
                  />
                  {errors.country && (
                    <div className="alert alert-danger " id="error2">
                      {errors.country}
                    </div>
                  )}
                </div>
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form2"
                    id="pin"
                    placeholder="Pincode"
                    name="pincode"
                    value={user.userAddr.pincode}
                    onChange={this.handleAddrChange}
                  />
                  {errors.pincode && (
                    <div className="alert alert-danger " id="error2">
                      {errors.pincode}
                    </div>
                  )}
                </div>
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form2"
                    placeholder="Phone No"
                    name="userContact"
                    value={user.userContact}
                    onChange={this.handleChange}
                  />
                  {errors.userContact && (
                    <div className="alert alert-danger " id="error2">
                      {errors.userContact}
                    </div>
                  )}
                </div>
              </div>
              <button className="btn btn-primary" id="changebtn">
                Register
              </button>
            </div>
            <div className="col"></div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default RegistrationForm;
