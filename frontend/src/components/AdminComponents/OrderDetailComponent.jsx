import React, { Component } from "react";
import service from "../../services/orderServices";

class OrderDetail extends Component {
  state = {
    orderId: this.props.match.params.orderId,

    customer: {},
    address: {},
    details: [],
  };

  componentDidMount() {
    service.getOrderById(this.state.orderId).then((response) => {
      this.setState({ customer: response.data.customer });
      this.setState({ address: response.data.orderAddress });
      this.setState({ details: response.data.details });
    });
  }

  render() {
    const { customer, address, details } = this.state;
    return (
      <React.Fragment>
        <table
          className="table"
          style={{
            margin: "auto",
            marginTop: "2rem",
            textAlign: "center",
            border: "1px solid black",
            width: "auto",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Customer Contact</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Order Address</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail) => (
              <tr key={detail.product.id}>
                <td>{customer.userName}</td>
                <td>{customer.userEmail}</td>
                <td>{customer.userContact}</td>
                <td>{detail.product.prodName}</td>
                <td>{detail.qty}</td>
                <td>{detail.totalPrice}</td>
                <td>
                  {address.houseNo +
                    " " +
                    address.area +
                    " " +
                    address.city +
                    " " +
                    address.state +
                    " " +
                    address.country +
                    " " +
                    address.pincode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default OrderDetail;
