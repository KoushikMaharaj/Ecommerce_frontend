import React, { Component } from "react";
import service from "../../services/orderServices";

class Orders extends Component {
  state = { orders: [] };
  
  componentDidMount() {
    service.getAllOrders().then((response) => {
      const orders = response.data;
      this.setState({ orders });
    });
  }
  
  render() {
    const { orders } = this.state;
    return (
      <React.Fragment>
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
              <th>Order Date</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderDate}</td>
                <td>
                  <a href={`/orderdetails/${order.id}`}>
                    <button className="btn btn-primary">detail</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Orders;
