import React, { Component } from "react";
import service from "../../services/productSevice";

class UpdateProduct extends Component {
  state = {
    id: this.props.match.params.id,
    product: [],
    prodDTO: {
      id: this.props.match.params.id,
      price: "",
      numberInStock: "",
    },
  };

  componentDidMount() {
    service.getProductDetail(this.state.id).then((response) => {
      this.setState({ product: response.data });
      const prodDTO = { ...this.state.prodDTO };
      prodDTO.price = response.data.price;
      prodDTO.numberInStock = response.data.numberInStock;
      this.setState({ prodDTO });
    });
  }

  handleChange = ({ currentTarget: input }) => {
    const prodDTO = { ...this.state.prodDTO };
    prodDTO[input.name] = input.value;
    this.setState({ prodDTO });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    service.updateProduct(this.state.prodDTO);
  };

  render() {
    const { product, prodDTO } = this.state;
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
              value={prodDTO.price}
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
              value={prodDTO.numberInStock}
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
