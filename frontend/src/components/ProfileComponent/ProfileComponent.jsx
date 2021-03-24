import React, { Component } from "react";

class ProfileComponent extends Component {
  state = {
    user: {},
  };

 

  render() {
    //const { user } = this.state.user;
    return (
      <div>
        <a href="/update/customer">
          <button className="btn btn-primary">Update Profile</button>
        </a>
        <a href={`/showorders`}>
          <button className="btn btn-primary">Orders</button>
        </a>
      </div>
    );
  }
}

export default ProfileComponent;
