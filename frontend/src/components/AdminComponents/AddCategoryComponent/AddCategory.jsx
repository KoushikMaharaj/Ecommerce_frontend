import React, { Component } from "react";
import service from "../../../services/productSevice";
import "./AddCategory.css";

class AddCategory extends Component {
  state = {
    category: {
      ctgName: "",
    },
    error: "",
  };

  handleChange = ({ currentTarget: input }) => {
    const category = { ...this.state.category };
    category[input.name] = input.value;
    this.setState({ category });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    service
      .addCategory(this.state.category)
      .then((response) => {
        window.location.assign("/admin");
      })
      .catch((ex) => {
        this.setState({ error: "Category exists" });
      });
  };

  render() {
    const { category, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="btn1" style={{ textAlign: "center" }}>
          <b>Add Category</b>
        </h1>
        {error && (
          <div className="alert alert-danger" id="error2">
            {error}
          </div>
        )}
        <input
          type="text"
          id="ctgNameInput"
          className="form-control btn1"
          placeholder="Enter Category"
          name="ctgName"
          value={category.ctgName}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary" id="btn1">
          Add Category
        </button>
      </form>
    );
  }
}

export default AddCategory;
