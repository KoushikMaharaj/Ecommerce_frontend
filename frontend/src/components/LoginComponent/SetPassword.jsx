import React, { Component } from "react";
import service from "../../services/userService";

class SetPassword extends Component {
  state = {
    email: "",
    error: "",
  };

  handleEmailChange = ({ currentTarget: input }) => {
    let email = { ...this.state.email };
    email = input.value;
    this.setState({ email });
  };

  handleProceed = (event) => {
    event.preventDefault();

    service
      .getUserByEmail(this.state.email)
      .then((response) => {
        
        window.sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.assign("/update/password");
      })
      .catch((ex) => {
        let error = "Please check email";
        this.setState({ error });
      });
  };

  render() {
    const { email, error } = this.state;
    return (
      <React.Fragment>
        <div style={{ marginTop: "2rem" }}>
          {error && (
            <div className="alert alert-danger " id="error2">
              {error}
            </div>
          )}
          <form onSubmit={this.handleProceed}>
            <div className="col center">
              <input
                type="email"
                className="form-control form1"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleEmailChange}
              />
              <button className="btn btn-primary">Proceed</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SetPassword;
