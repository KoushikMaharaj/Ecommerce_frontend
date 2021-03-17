import React, { Component } from "react";
import service from "../../services/productSevice";

class AddCategory extends Component {
  state = {
    category: {
      ctgName: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const category = { ...this.state.category };
    category[input.name] = input.value;
    this.setState({ category });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.category);
    service.addCategory(this.state.category);
  };

  render() {
    const { category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Add Category</h1>
        <input
          type="text"
          id="ctgNameInput"
          className="form-control"
          placeholder="Enter Category"
          name="ctgName"
          value={category.ctgName}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          style={{ marginLeft: "25%", width: "50%" }}
        >
          Add Category
        </button>
      </form>
    );
  }
}

export default AddCategory;
