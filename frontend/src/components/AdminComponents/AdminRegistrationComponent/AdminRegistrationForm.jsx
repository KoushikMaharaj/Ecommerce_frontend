import React, { Component } from "react";
import Joi from "joi-browser";
import "./AdminRegistrationForm.css";
import service from "../../../services/userService";

class AdminRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "",
        userEmail: "",
        userPassword: "",
        userContact: "",
        role: "ADMIN",
      },
      errors: {},
      regiError: "",
    };
  }

  schema = {
    userName: Joi.string().required().label("Name"),
    userEmail: Joi.string().required().label("Email"),
    userPassword: Joi.string().min(3).max(10).required().label("Password"),
    userContact: Joi.string().required().max(10).label("Contact"),
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
          window.location.assign("/admin");
        })
        .catch((ex) => {
          this.setState({ regiError: "Email is alredy taken" });
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
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-6 " id="main-class">
            <h2 className="main">
              <u>Register Admin</u>
            </h2>
            {regiError && (
              <div className="alert alert-danger" id="error2">
                {regiError}
              </div>
            )}

            <div className="center">
              <div className="col center">
                <input
                  type="text"
                  className="form-control form1"
                  placeholder="Name"
                  id="gap"
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
                  id="gap"
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
                  id="gap"
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
              {/* </div> */}

              <div className="col center">
                <input
                  type="text"
                  className="form-control form1"
                  placeholder="Phone No"
                  id="gap"
                  name="userContact"
                  value={user.userContact}
                  onChange={this.handleChange}
                />
                {errors.userContact && (
                  <div className="alert alert-danger " id="error2">
                    {errors.userContact}
                  </div>
                )}
                <button className="btn btn-primary" id="button1">
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </form>
    );
  }
}
export default AdminRegistrationForm;
