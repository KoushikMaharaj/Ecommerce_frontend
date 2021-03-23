import React, { Component } from "react";
import service from "../../services/productSevice";
import OrderService from "../../services/orderServices";

class ProductDetails extends Component {
  state = {
    product: [],
    id: this.props.match.params.id,
    images: [],
  };

  componentDidMount() {
    console.log(this.state.id);
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
    OrderService.placeOrder(this.state.product.id);
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
            <div className="col-sm-8" style={{ textAlign: "left" }}>
              <h4>{this.state.product.prodDesc}</h4>
              <h4>
                price:
                <i className="fa fa-inr" aria-hidden="true">
                  <b> {this.state.product.price}</b>
                </i>
              </h4>
              <p>Warrenty: {this.state.product.prodWarrenty} years</p>
              <p>{this.checkStock()}</p>
              {/* <p>
                <input type="number">qty</input>
              </p> */}
            </div>
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
