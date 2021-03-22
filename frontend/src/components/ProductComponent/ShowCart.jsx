import React, { Component } from "react";
import service from "../../services/productSevice";

class ShowCart extends Component {
  state = {
    products: [],
    error: "",
  };

  componentDidMount() {
    service
      .showCart()
      .then((response) => {
        console.log(response.data);
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

  render() {
    const { products } = this.state;

    return (
      <div>
        {this.error()}
        {products.map((product) => (
          <div className="container" key={product.id}>
            <div
              className="jumbotron jumbotron-fluid"
              style={{ backgroundColor: "white", color: "black" }}
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
                  />
                </div>
                <div className="col-sm-8" style={{ textAlign: "left" }}>
                  <h4>{product.prodDesc}</h4>
                  <h4>
                    price:
                    <i className="fa fa-inr" aria-hidden="true">
                      <b> {product.price}</b>
                    </i>
                  </h4>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default ShowCart;
