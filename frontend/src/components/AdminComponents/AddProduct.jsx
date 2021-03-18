import React, { Component } from "react";
import service from "../../services/productSevice.js";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        prodName: "",
        prodDesc: "",
        prodWarrenty: "",
        price: "",
        numberInStock: "",
        prodImage: "",
        subCtg: {
          subCtgName: "",
        },
      },
      subcategories: [],
    };
  }

  componentDidMount() {
    service.getAllSubCategories().then((response) => {
      const subcategories = response.data;
      this.setState({ subcategories });
      console.log(this.state.subcategories);
    });
  }

  handleChange = ({ currentTarget: input }) => {
    const product = { ...this.state.product };
    product[input.name] = input.value;
    this.setState({ product });
    //console.log(this.state.product);
  };

  handleSubCategoryChange = ({ currentTarget: input }) => {
    const product = { ...this.state.product };
    product.subCtg[input.name] = input.value;
    console.log(product);
    this.setState({ product });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.product);
    service.addProduct(this.state.product);
  };

  render() {
    const { subcategories } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Add Product</h1>
        <label>Choose Subcategory: </label>
        <select
          name="subCtgName"
          id="subcategory"
          onChange={this.handleSubCategoryChange}
        >
          <option>None</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory.id}>{subcategory.subCtgName}</option>
          ))}
        </select>
        <input
          type="text"
          id="ctgNameInput"
          className="form-control"
          placeholder="Enter Product name"
          name="prodName"
          onChange={this.handleChange}
        />
        <textarea
          style={{
            width: "50%",
            margin: "auto",
            marginBottom: "1rem",
            fontWeight: "bol",
            fontSize: "1.5rem",
          }}
          type="text"
          id="prodDescInput"
          className="form-control"
          placeholder="Enter Product description"
          name="prodDesc"
          onChange={this.handleChange}
        />
        <input
          type="number"
          id="prodWarrentyInput"
          className="form-control"
          placeholder="Enter Product warrenty"
          name="prodWarrenty"
          onChange={this.handleChange}
        />
        <input
          type="number"
          id="numberInStock"
          className="form-control"
          placeholder="Enter Stock in Number"
          name="numberInStock"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="prodPriceInput"
          className="form-control"
          placeholder="Enter Product price"
          name="price"
          onChange={this.handleChange}
        />
        <label
          style={{
            fontSize: "1.5rem",
            marginLeft: "21.5rem",
            marginBottom: "1rem",
          }}
        >
          Product Image:
        </label>{" "}
        <input
          type="file"
          id="prodImageInput"
          name="prodImage"
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          style={{
            marginLeft: "25%",
            width: "50%",
            fontWeight: "bolder",
            fontSize: "1.5rem",
          }}
        >
          Add Product
        </button>
      </form>
    );
  }
}

export default AddProduct;
