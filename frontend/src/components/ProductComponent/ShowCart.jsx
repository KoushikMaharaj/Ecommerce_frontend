import React, { Component } from "react";
import service from "../../services/productSevice";

class ShowCart extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    service.showCart().then((response) => {
      console.log(response.data);
      this.setState({ products: response.data.products });
    });
  }

  renderImage = (id) => {
    return `http://localhost:8080/product/images/${id}`;
  };

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        {products.map((product) => (
          <div className="container">
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
      </React.Fragment>
    );
  }
}

export default ShowCart;
