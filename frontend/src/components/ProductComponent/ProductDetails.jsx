import React, { Component } from "react";
import service from "../../services/productSevice";
import OrderService from "../../services/orderServices";

class ProductDetails extends Component {
  state = {
    product: [],
    id: this.props.match.params.id,
    qty: 1,
  };

  componentDidMount() {
    service.getProductDetail(this.state.id).then((response) => {
      const product = response.data;
      this.setState({ product });
    });
  }

  checkStock = () => {
    return this.state.product.numberInStock > 5 &&
      this.state.product.numberInStock !== 0 ? (
      <span style={{ color: "green" }}>In Stock</span>
    ) : this.state.product.numberInStock > 0 ? (
      <span style={{ color: "red" }}>
        only {this.state.product.numberInStock} stock left
      </span>
    ) : (
      <span style={{ color: "red" }}>Out of Stock</span>
    );
  };

  addToCart = () => {
    service.addToCart(this.state.id);
  };

  order = () => {
    let user = JSON.parse(window.sessionStorage.getItem("user"));
    if (user === null) {
      window.location.assign("/login");
    }
    OrderService.placeOrder(this.state.product.id, this.state.qty);
  };

  renderImage = (id) => {
    return `http://localhost:8080/product/images/${id}`;
  };

  renderButtons = () => {
    return this.state.product.numberInStock > 0 ? (
      <div style={{ margin: "auto" }}>
        <button className="btn btn-primary" onClick={this.addToCart}>
          Add to Cart
        </button>{" "}
        <button className="btn btn-primary" onClick={this.order}>
          Order
        </button>
      </div>
    ) : (
      <div style={{ margin: "auto" }}>
        <button className="btn btn-primary" disabled>
          Add to Cart
        </button>{" "}
        <button className="btn btn-primary" disabled>
          Order
        </button>
      </div>
    );
  };

  handleDecrement = () => {
    let qty = this.state.qty;
    qty = qty - 1;
    this.setState({ qty });
  };

  handleIncrement = () => {
    let qty = this.state.qty;
    qty = qty + 1;
    this.setState({ qty });
  };

  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img
                src={this.renderImage(this.state.id)}
                alt={this.state.product.prodName}
                width="350px"
                height="300px"
              />
            </div>
            <div className="col-sm-8">
              <h4 style={{ textAlign: "left" }}>
                {this.state.product.prodDesc}
              </h4>
              <h4 style={{ textAlign: "left" }}>
                price:
                <i className="fa fa-inr" aria-hidden="true">
                  <b> {this.state.product.price}</b>
                </i>
              </h4>
              <p>Warrenty: {this.state.product.prodWarrenty} years</p>
              <p>{this.checkStock()}</p>
              <div>
                {this.state.qty === 1 ? (
                  <button
                    className="btn btn-primary disabled"
                    style={{ marginRight: "1rem" }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "1rem" }}
                    onClick={this.handleDecrement}
                  >
                    -
                  </button>
                )}
                {this.state.qty}
                {this.state.qty === this.state.product.numberInStock ? (
                  <button
                    className="btn btn-primary disabled"
                    style={{ marginLeft: "1rem" }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "1rem" }}
                    onClick={this.handleIncrement}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
