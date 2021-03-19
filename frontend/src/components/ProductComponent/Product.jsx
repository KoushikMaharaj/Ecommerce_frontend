import React, { Component } from "react";
import NavBar from "./NavBar";
import service from "../../services/productSevice";
import "./Product.css";
import { Link } from 'react-router-dom';

class Product extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    service.getAllProducts().then((response) => {
      console.log(response.data);
      const products = response.data;
      this.setState({ products });
    });
  }

  viewDetails = (id) => {
    console.log(id);
  };

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <h3>{product.prodName}</h3>
              <h4>
                <i className="fa fa-inr" aria-hidden="true">
                  <b> {product.price}</b>
                </i>
              </h4>
              <img
                src="https://m.media-amazon.com/images/I/71gS+AnkfAL._AC_UY218_.jpg"
                alt={product.prodName}
              />
              <p>
                <Link to={`/product/details/${product.id}`}>
                <button className="btn btn-primary">
                  View Details
                </button></Link>
              </p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
