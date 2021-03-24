import React, { Component } from "react";
import SideBar from "./SideBar";
import service from "../../services/productSevice";
import "./Product.css";
import { Link } from "react-router-dom";

class Product extends Component {
  state = {
    products: [],
    images: [],
  };

  componentDidMount() {
    service.getAllProducts().then((response) => {
      console.log(response.data);
      const products = response.data;
      this.setState({ products });
     /*  service.getAllProductImages().then((response) => {
        this.setState({ images: response.data });
      }); */
    });
  }

  renderImage = (id) => {
    return `http://localhost:8080/product/images/${id}`;
  };

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <SideBar />
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
                src={this.renderImage(product.id)}
                alt={product.prodName}
                width="300px"
                height="300px"
              />
              <p>
                <Link to={`/product/details/${product.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
