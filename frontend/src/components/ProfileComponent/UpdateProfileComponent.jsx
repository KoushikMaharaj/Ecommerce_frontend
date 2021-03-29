import React, { Component } from "react";
import Joi from "joi-browser";
import service from "../../services/userService";
import "./UpdateProfile.css";

class UpdateProfile extends Component {
  state = {
    userDTO: { id: "", userName: "", userEmail: "", userContact: "" },
    errors: "",
  };

  componentDidMount() {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    const userDTO = { ...this.state.userDTO };
    userDTO.id = user.id;
    userDTO.userName = user.userName;
    userDTO.userEmail = user.userEmail;
    userDTO.userContact = user.userContact;
    this.setState({ userDTO });
  }

  schema = {
    id: Joi.required(),
    userName: Joi.string().required().label("Name"),
    userEmail: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
    userContact: Joi.string().min(10).max(10).label("Contact"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.userDTO, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    console.log("validate: ", errors);

    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const userDTO = { ...this.state.userDTO };
    userDTO[input.name] = input.value;
    this.setState({ userDTO });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    else {
      service.userUpdate(this.state.userDTO).then((response) => {
        window.sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.assign("/user/profile");
      });
    }
  };

  render() {
    const { userDTO, errors } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ marginTop: "2rem" }}>
          <div className="col center">
            <input
              type="text"
              className="form-control form1"
              placeholder="Name"
              name="userName"
              value={userDTO.userName}
              onChange={this.handleChange}
            />
          </div>
          {errors.userName && (
            <div className="alert alert-danger" id="error">
              {errors.userName}
            </div>
          )}
          <div className="col center">
            <input
              type="email"
              className="form-control form1"
              placeholder="Email"
              name="userEmail"
              value={userDTO.userEmail}
              onChange={this.handleChange}
            />
          </div>
          {errors.userEmail && (
            <div className="alert alert-danger" id="error">
              {errors.userEmail}
            </div>
          )}
          <div className="col center">
            <input
              type="text"
              className="form-control form1"
              placeholder="Contact"
              name="userContact"
              value={userDTO.userContact}
              onChange={this.handleChange}
            />
          </div>
          {errors.userContact && (
            <div className="alert alert-danger" id="error">
              {errors.userContact}
            </div>
          )}
          <div className="col center" style={{ marginTop: "2rem" }}>
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default UpdateProfile;
