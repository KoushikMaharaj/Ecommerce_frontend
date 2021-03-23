import React, { Component } from "react";
import service from "../../services/productSevice";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

class ProductsBySubCategory extends Component {
  state = {
    subCtgName: this.props.match.params.subCtgName,
    products: [],
  };
  componentDidMount() {
    service.getProductBySubCategory(this.state.subCtgName).then((response) => {
      console.log(response.data);
      this.setState({ products: response.data });
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

export default ProductsBySubCategory;
