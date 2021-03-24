import React, { Component } from "react";
import service from "../../services/orderServices"
class ShowOrders extends Component {
  state = { user: [] };
  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    this.setState({ user });
    service.getOrdersByCustomer(this.state.user.id).then(response=>{
        console.log(response.data);
    })
  }

 

  render() {
    return <h1>{this.state.user.id}</h1>;
  }
}

export default ShowOrders;
