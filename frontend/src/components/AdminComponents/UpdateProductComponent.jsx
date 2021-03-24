import React, { Component } from "react";
import service from "../../services/productSevice";

class UpdateProduct extends Component {
  state = { id: this.props.match.params.id, product: [] };

  componentDidMount() {
    service.getProductDetail(this.state.id).then((response) => {
      console.log(response.data);
      this.setState({ product: response.data });
    });
  }

  handleChange = ({ currentTarget: input }) => {
    const product = { ...this.state.product };
    product[input.name] = input.value;
    this.setState({ product });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.product);
    service.updateProduct(this.state.product);
  };

  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signIn-form">
          <div className="form-group">
            <label style={{ marginLeft: "21rem", fontSize: "1.5rem" }}>
              Product name:
            </label>
            <input
              type="text"
              name="prodName"
              className="form-control"
              value={product.prodName}
              disabled
            />
          </div>
          <div className="form-group">
            <label style={{ marginLeft: "21rem", fontSize: "1.5rem" }}>
              Product price:
            </label>
            <input
              type="text"
              name="price"
              className="form-control"
              value={product.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label style={{ marginLeft: "21rem", fontSize: "1.5rem" }}>
              Number in stock:
            </label>
            <input
              type="number"
              name="numberInStock"
              className="form-control"
              value={product.numberInStock}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn signIn-btn ">
            <i>
              <b>Update</b>
            </i>
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateProduct;
