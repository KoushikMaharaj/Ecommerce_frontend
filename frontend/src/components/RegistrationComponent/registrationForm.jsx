import React, { Component } from "react";
import Joi from "joi-browser";
import "./registration1form.css";
import service from "../../services/userService";

class RegistrationForm extends Component {
  state = {
    user: {
      userName: "",
      userEmail: "",
      userPassword: "",
      userAddr: {
        houseNo: "",
        area: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
      },
      userContact: "",
      role: "CUSTOMER",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("userName"),
    userEmail: Joi.string().required().label("userEmail"),
    userPassword: Joi.string().min(3).max(10).required().label("userPassword"),
    userContact: Joi.string().required().min(10).max(10).label("userContact"),
    userAddr: Joi.object(),
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
    console.log(this.state.user);
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) return;
    else {
      console.log(this.state.user);
      service.userRegister(this.state.user);
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
    /* console.log(this.state.user); */
  };

  handleAddrChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user.userAddr[input.name] = input.value;
    this.setState({ user });
    /* console.log(this.state.user); */
  };

  render() {
    const { user, errors } = this.state;
    return (
      <div className="container main-container">
        <div className="row ">
          <div className="col"></div>
          <div className="col-sm-12 col-md-6 form-class">
            <form onSubmit={this.handleSubmit}>
              <h2 className="main-link">Register Account Form</h2>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form1"
                  id="userName"
                  aria-describedby="emailHelp"
                  placeholder="userName"
                  name="userName"
                  value={user.userName}
                  onChange={this.handleChange}
                />
                {errors.userName && (
                  <div className="alert alert-danger " id="error2">
                    {errors.userName}
                  </div>
                )}

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
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

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
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

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
                  placeholder="HouseNo"
                  name="houseNo"
                  value={user.userAddr.houseNo}
                  onChange={this.handleAddrChange}
                />

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
                  placeholder="Area"
                  name="area"
                  value={user.userAddr.area}
                  onChange={this.handleAddrChange}
                />

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
                  placeholder="City"
                  name="city"
                  value={user.userAddr.city}
                  onChange={this.handleAddrChange}
                />

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
                  placeholder="State"
                  name="state"
                  value={user.userAddr.state}
                  onChange={this.handleAddrChange}
                />

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
                  placeholder="Country"
                  name="country"
                  value={user.userAddr.country}
                  onChange={this.handleAddrChange}
                />

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
                  placeholder="PinCode"
                  name="pincode"
                  value={user.userAddr.pincode}
                  onChange={this.handleAddrChange}
                />

                <input
                  type="text"
                  className="form-control form"
                  id="exampleInput"
                  placeholder="ContactNo"
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

              <button type="submit" className="btn btn-primary" id="button1">
                <i>Register</i>
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
export default RegistrationForm;
