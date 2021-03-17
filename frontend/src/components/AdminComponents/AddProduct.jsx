import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        prodName: "",
        prodDesc: "",
        prodWarrenty: "",
        price: "",
        prodImage: "",
        subCtg: {
          subCtgName: "",
        },
      },
      subcategories: [],
    };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Add Category</h1>
        <input
          type="text"
          id="ctgNameInput"
          className="form-control"
          placeholder="Enter Product name"
          name="prodName"
          onChange={this.handleChange}
        />
         <textarea style={{width:"50%", margin:"auto",marginBottom:"1rem",fontWeight:"bol",fontSize:"1.5rem"}}
          type="text"
          id="ctgNameInput"
          className="form-control"
          placeholder="Enter Product description"
          name="prodDesc"
          onChange={this.handleChange}
        />
         <input
          type="number"
          id="ctgNameInput"
          className="form-control"
          placeholder="Enter Product warrenty"
          name="prodWarrenty"
          onChange={this.handleChange}
        />
         <input
          type="text"
          id="ctgNameInput"
          className="form-control"
          placeholder="Enter Product price"
          name="price"
          onChange={this.handleChange}
        />
        <label style={{fontWeight:"bold",fontSize:"1.5rem",marginLeft:"17.5rem",marginBottom:"1rem"}}>Product Image:</label>{" "}
         <input
          type="file"
          id="ctgNameInput"          
          name="prodImage"
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          style={{ marginLeft: "25%", width: "50%",fontWeight:"bolder",fontSize:"1.5rem" }}
        >
          Add Product
        </button>
      </form>
    );
  }
}

export default AddProduct;
