import React, { Component } from "react";
import Joi from "joi-browser";
import service from "../../services/userService";

class UpdatePassword extends Component {
  state = {
    userDTO: {
      id: "",
      userPassword: "",
    },
    errors: "",
  };

  componentDidMount() {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    const userDTO = { ...this.state.userDTO };
    userDTO.id = user.id;
    this.setState({ userDTO });
  }

  schema = {
    id: Joi.number(),
    userPassword: Joi.string().alphanum().min(3).max(10).label("Password"),
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
      service.updateUserPassword(this.state.userDTO).then((response) => {
        window.sessionStorage.clear();
        window.location.assign("/login");
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
              type="password"
              className="form-control form1"
              placeholder="Password"
              name="userPassword"
              value={userDTO.userPassword}
              onChange={this.handleChange}
            />
            {errors.userPassword && (
              <div className="alert alert-danger ">{errors.userPassword}</div>
            )}
            <button className="btn btn-primary">Change Password</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default UpdatePassword;
