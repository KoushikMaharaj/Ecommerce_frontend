import React, { Component } from "react";
import service from "../../services/userService";

class UpdateProfile extends Component {
  state = { user: [] };

  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    this.setState({ user });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
    service.updateUser(this.state.user).then(response=>{
        console.log(response.data);
    })
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-8 " id="main-class">
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
                </div>
                <div className="col center">
                  <input
                    type="text"
                    className="form-control form1"
                    placeholder="Password"
                    name="userPassword"
                    value={user.userPassword}
                    onChange={this.handleChange}
                  />
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
                </div>
              </div>
              <button className="btn btn-primary" id="changebtn">
                Update
              </button>
            </div>
            <div className="col"></div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default UpdateProfile;
