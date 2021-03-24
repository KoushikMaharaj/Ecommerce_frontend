import React, { Component } from "react";
import service from "../../services/productSevice";



class ShowProducts extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    service.getAllProducts().then((response) => {
      this.setState({ products: response.data });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <table
        className="table"
        style={{
          width: "60%",
          textAlign: "center",
          marginTop: "2rem",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.prodName}</td>
              <td>{product.numberInStock}</td>
              <td>{product.price}</td>
              <td>
                <a href={`/update/product/${product.id}`}>
                  <button className="btn btn-primary">Update</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ShowProducts;
