import React, { Component } from "react";
import service from "../../services/userService";

import Joi from "joi-browser";

class UpdateAddress extends Component {
  state = {
    userDTO: {
      id: "",
      userAddr: {},
    },
    errors: "",
  };

  componentDidMount() {
    const user = JSON.parse(window.sessionStorage.getItem("user"));

    const userDTO = { ...this.state.userDTO };
    userDTO.id = user.id;
    userDTO.userAddr = user.userAddr;
    this.setState({ userDTO });
  }

  schema = Joi.object({
    houseNo: Joi.string().required(),
    area: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    pincode: Joi.string().required(),
  });

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(
      this.state.userDTO.userAddr,
      this.schema,
      options
    );
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    console.log("validate: ", errors);

    return errors;
  };

  handleAddrChange = ({ currentTarget: input }) => {
    const userDTO = { ...this.state.userDTO };
    userDTO.userAddr[input.name] = input.value;
    this.setState({ userDTO });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    else {
      service.updateUserAddress(this.state.userDTO).then((response) => {
        window.sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.assign("/user/profile");
      });
    }
  };

  render() {
    const { userDTO, errors } = this.state;
    return (
      <div
        style={{
          alignItems: "center",
          margin: "auto",
          display: "block",
          textAlign: "center",
          width: "50%",
          marginTop: "2rem",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="House No"
            name="houseNo"
            value={userDTO.userAddr.houseNo}
            onChange={this.handleAddrChange}
          />
          {errors.houseNo && (
            <div className="alert alert-danger " id="error">
              {errors.houseNo}
            </div>
          )}

          <textarea
            style={{
              width: "40%",
              margin: "auto",
              display: "block",
              marginBottom: "0.8rem",
              fontSize: "1.5rem",
            }}
            type="text"
            className="form-control"
            placeholder="Area"
            name="area"
            value={userDTO.userAddr.area}
            onChange={this.handleAddrChange}
          />
          {errors.area && (
            <div className="alert alert-danger " id="error">
              {errors.area}
            </div>
          )}

          <input
            type="text"
            className="form-control "
            placeholder="City"
            name="city"
            value={userDTO.userAddr.city}
            onChange={this.handleAddrChange}
          />
          {errors.city && (
            <div className="alert alert-danger " id="error">
              {errors.city}
            </div>
          )}

          <input
            type="text"
            className="form-control "
            placeholder="State"
            name="state"
            value={userDTO.userAddr.state}
            onChange={this.handleAddrChange}
          />
          {errors.state && (
            <div className="alert alert-danger " id="error">
              {errors.state}
            </div>
          )}

          <input
            type="text"
            className="form-control "
            placeholder="Country"
            name="country"
            value={userDTO.userAddr.country}
            onChange={this.handleAddrChange}
          />
          {errors.country && (
            <div className="alert alert-danger " id="error">
              {errors.country}
            </div>
          )}

          <input
            type="text"
            className="form-control"
            placeholder="Pincode"
            name="pincode"
            value={userDTO.userAddr.pincode}
            onChange={this.handleAddrChange}
          />
          {errors.pincode && (
            <div className="alert alert-danger " id="error">
              {errors.pincode}
            </div>
          )}
          <button className="btn btn-primary">Update Address</button>
        </form>
      </div>
    );
  }
}

export default UpdateAddress;
