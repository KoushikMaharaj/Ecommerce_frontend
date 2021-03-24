import React, { Component } from "react";
import service from "../../services/productSevice";
import orderService from "../../services/orderServices";

class ShowCart extends Component {
  state = {
    cartId: "",
    products: [],
    error: "",
  };

  componentDidMount() {
    service
      .showCart()
      .then((response) => {
        console.log(response.data);
        this.setState({ cartId: response.data.id });
        this.setState({ products: response.data.products });
      })
      .catch((ex) => {
        const error = "Cart is Empty";
        this.setState({ error });
      });
  }

  renderImage = (id) => {
    return `http://localhost:8080/product/images/${id}`;
  };

  error = () => {
    if (this.state.error)
      return <div className="alert alert-danger">{this.state.error}</div>;
  };

  removeProduct = (id) => {
    console.log(id);
  };

  order = (id) => {
    console.log(id);
    orderService.placeCartOrder(id);
  };

  checkProducts = () => {
    if (this.state.products === null) {
      return <div className="alert alert-danger">Cart is Empty</div>;
    }
  };

  render() {
    const { products } = this.state;

    return (
      <div style={{ marginTop: "4rem" }}>
        {this.state.products.length === 0 && (
          <div className="alert alert-danger">Cart is Empty</div>
        )}
        {this.error()}
        {products.map((product) => (
          <div className="container" key={product.id}>
            <div
              className="jumbotron jumbotron-fluid"
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "4rem",
              }}
            >
              <div
                className="row"
                key={product.id}
                style={{ marginBottom: "5rem" }}
              >
                <div className="col-sm-4">
                  <img
                    src={this.renderImage(product.id)}
                    alt={product.prodName}
                    width="275px"
                    height="300px"
                  />
                </div>
                <div className="col-sm-6" style={{ textAlign: "left" }}>
                  <h4>{product.prodDesc}</h4>
                  <h4>
                    price:
                    <i className="fa fa-inr" aria-hidden="true">
                      <b> {product.price}</b>
                    </i>
                  </h4>
                  <p>Warrenty: {product.prodWarrenty} years</p>
                  <p>
                    {product.numberInStock > 5 &&
                    product.numberInStock !== 0 ? (
                      <span style={{ color: "green" }}>In Stock</span>
                    ) : product.numberInStock > 0 ? (
                      <span style={{ color: "red" }}>
                        only {product.numberInStock} stock left
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>Out of Stock</span>
                    )}
                  </p>
                </div>
                <div className="col-sm-2">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => this.removeProduct(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
        {this.state.error ? null : this.state.products.length === 0 ? null : (
          <button
            className="btn btn-primary btn-lg"
            onClick={() => this.order(this.state.cartId)}
            style={{
              margin: "auto",
              display: "block",
              textAlign: "center",
              width: "30%",
              marginBottom: "2rem",
            }}
          >
            Order
          </button>
        )}
      </div>
    );
  }
}

export default ShowCart;
