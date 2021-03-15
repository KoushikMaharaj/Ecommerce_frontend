import React, { Component } from "react";
import Joi from "joi-browser";
import "./loginForm.css";
import image from "./images/computer-shoppe.jpg";
import axios from "axios";

const API_URL = "http://localhost:8080/user";

// class LoginForm extends Component {
//   state = {
//     user: { username: "", password: "" },
//     errors: {},
//   };
//   //   username = React.createRef();

//   /* componentDidMount() {
//     this.username.current.focus();
//   } */

//   schema = {
//     username: Joi.string().required().label("Username"),
//     password: Joi.string().min(3).max(10).required().label("Password"),
//   };

//   validate = () => {
//     const options = { abortEarly: false };
//     const result = Joi.validate(this.state.user, this.schema, options);
//     if (!result.error) return null;

//     const errors = {};
//     for (let item of result.error.details) errors[item.path[0]] = item.message;
//     return errors;
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const errors = this.validate();
//     console.log(errors);
//     this.setState({ errors: errors || {} });
//     if (errors) return;
//     console.log(this.state.user);
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const user = { ...this.state.user };
//     user[input.name] = input.value;
//     this.setState({ user });
//   };

//   render() {
//     const { user, errors } = this.state;
//     return (
//       <div className="container">
//       <h1>Login</h1>
//       <form onSubmit={this.handleSubmit}>
//         <div className="for-group">
//           <label htmlFor="username">Username</label>
//           <input className="hover1"
//             autoFocus
//             placeholder="Enter Username"
//             id="username"
//             type="text"
//             className="form-control"
//             name="username"
//             value={user.username}
//             onChange={this.handleChange}
//           />
//           {errors.username && (
//             <div className="alert alert-danger">{errors.username}</div>
//           )}
//         </div>
//         <div className="for-group">
//           <label htmlFor="password">Password</label>
//           <input
//             placeholder="Enter Password"
//             id="password"
//             type="text"
//             className="form-control"
//             name="password"
//             value={user.password}
//             onChange={this.handleChange}
//           />
//           {errors.password && (
//             <div className="alert alert-danger">{errors.password}</div>
//           )}
//         </div>
//         <br />
//         <button className="btn btn-primary" id="form.signIn-form">Login</button>
//       </form>
//     </div>
//     );
//   }
// }

class LoginForm extends Component {
  state = {
    user: { userEmail: "", userPassword: "" },
    errors: {},
  };

  schema = {
    userEmail: Joi.string().required().label("userEmail"),
    userPassword: Joi.string().min(3).max(10).required().label("userPassword"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.user, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
  /*   console.log("validate: ", errors); */
    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    /* console.log(errors); */
    this.setState({ errors: errors || {} });
   /*  console.log(errors); */
    if (errors) return;
    else {
      console.log(this.state.user);
      axios.post(API_URL + "/login", this.state.user).then((response) => {
        console.log(response.data);
      });
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };
  render() {
    const { user, errors } = this.state;
    return (
      <div className="container signIn">
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-8">
            <div className="card signIn-card">
              <img src={image} className="img-Fluid imgCenter signIn-img" />
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
                <button className="btn signIn-btn btn-lg">
                  <i>
                    <b>Sign In</b>
                  </i>
                </button>
              </form>
            </div>
            <button className="Register">
              <i>
                <b>Register</b>
              </i>
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
