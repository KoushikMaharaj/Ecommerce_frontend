import React, { Component } from "react";
import service from "../../services/orderServices";

class ProfileComponent extends Component {
  state = {
    user: {},
    orders: [],
  };

  componentDidMount() {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    console.log(user);
    this.setState({ user });
    service.getOrdersByCustomer(user.id).then((response) => {
      console.log(response.data);
      const orders = response.data;
      this.setState({ orders });
    });
  }

  renderOrder = () => {
    return;
  };

  render() {
    const { orders } = this.state;
    return (
      <React.Fragment>
        <div>
          <a href="/updateprofile">
            <button className="btn btn-primary">Update Profile</button>
          </a>
          <a href="/update/address">
            <button className="btn btn-primary">Change address</button>
          </a>
        </div>
        <div>
          <table
            className="table"
            style={{
              width: "80%",
              margin: "auto",
              marginTop: "5rem",
              border: "1px solid black",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) =>
                order.details.map((detail) => (
                  <tr key={detail.product.id}>
                    <td>{order.id}</td>
                    <td>{detail.product.prodName}</td>
                    <td>{detail.qty}</td>
                    <td>{detail.totalPrice}</td>
                    <td>{order.orderDate}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileComponent;
