import React, { Component } from "react";
import service from "../../services/productSevice.js";
import "./AddProduct.css";

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
        subCtg: {
          subCtgName: "",
        },
      },
      prodImage: "",
      ctg: {
        ctgName: "",
      },
      categories: [],
      subcategories: [],
      error: "",
    };
  }

  componentDidMount() {
    service.getAllCategories().then((response) => {
      const categories = response.data;
      this.setState({ categories });
    });

    service.getAllSubCategories().then((response) => {
      const subcategories = response.data;
      this.setState({ subcategories });
    });
  }

  handleChange = ({ currentTarget: input }) => {
    const product = { ...this.state.product };
    product[input.name] = input.value;
    this.setState({ product });
  };

  handleCategoryChange = ({ currentTarget: input }) => {
    const ctg = { ...this.state.ctg };
    ctg.ctgName = input.value;
    this.setState({ ctg: ctg });
  };

  handleImageChange = (event) => {
    const prodImage = event.target.files[0];
    this.setState({ prodImage });
  };

  handleSubCategoryChange = ({ currentTarget: input }) => {
    const product = { ...this.state.product };
    product.subCtg[input.name] = input.value;
    this.setState({ product });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    service
      .addProduct(this.state.product, this.state.prodImage)
      .then((response) => {
        window.location.assign("/admin");
      })
      .catch((ex) => {
        this.setState({ error: "Product exists" });
      });
  };

  render() {
    const { categories, subcategories, ctg, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            marginBottom: "0.8rem",
          }}
        >
          <u>Add Product</u>
        </h1>
        {error && (
          <div className="alert alert-danger" id="error2">
            {error}
          </div>
        )}
        <label>Choose Category: </label>
        <select
          name="ctgName"
          id="category"
          onChange={this.handleCategoryChange}
        >
          <option>None</option>
          {categories.map((category) => (
            <option key={category.id}>{category.ctgName}</option>
          ))}
        </select>
        <label style={{ marginBottom: "1rem", fontSize: "1rem" }}>
          Choose Subcategory:{" "}
        </label>
        <select
          name="subCtgName"
          id="subcategory"
          onChange={this.handleSubCategoryChange}
        >
          <option>None</option>
          {subcategories.map((subcategory) => (
            <option style={{ width: "2rem" }} key={subcategory.id}>
              {ctg.ctgName === subcategory.ctg.ctgName &&
                subcategory.subCtgName}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="ctgNameInput"
          className="form-control size"
          placeholder="Enter Product name"
          name="prodName"
          onChange={this.handleChange}
        />
        <textarea
          style={{
            width: "40%",
            margin: "auto",
            marginBottom: "1rem",
            fontWeight: "bol",
            fontSize: "1.5rem",
            height: "5rem",
          }}
          type="text"
          id="prodDescInput"
          className="form-control size"
          placeholder="Enter Product description"
          name="prodDesc"
          onChange={this.handleChange}
        />
        <input
          type="number"
          id="prodWarrentyInput"
          className="form-control size"
          placeholder="Enter Product warrenty"
          name="prodWarrenty"
          onChange={this.handleChange}
        />
        <input
          type="number"
          id="numberInStock"
          className="form-control size"
          placeholder="Enter Stock in Number"
          name="numberInStock"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="prodPriceInput"
          className="form-control size"
          placeholder="Enter Product price"
          name="price"
          onChange={this.handleChange}
        />
        <label
          style={{
            fontSize: "1.5rem",
            marginLeft: "30rem",
            marginBottom: "1rem",
            marginTop: "1.2rem",
          }}
        >
          Product Image:
        </label>{" "}
        <input
          type="file"
          id="prodImageInput"
          name="prodImage"
          onChange={this.handleImageChange}
        />
        <button
          className="btn btn-primary"
          style={{
            margin: "auto",
            display: "block",

            width: "30%",
            fontWeight: "bolder",
            fontSize: "1.5rem",
            marginTop: "1.2rem",
          }}
        >
          Add Product
        </button>
      </form>
    );
  }
}

export default AddProduct;
