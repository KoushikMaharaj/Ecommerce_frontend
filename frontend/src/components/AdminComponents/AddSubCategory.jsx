import React, { Component } from "react";
import service from "../../services/productSevice";

class AddSubCategory extends Component {
  state = {
    subcategory: {
      subCtgName: "",
      ctg: {
        ctgName: {},
      },
    },
    categories: [],
    error: "",
  };

  componentDidMount() {
    service.getAllCategories().then((response) => {
      const categories = response.data;
      this.setState({ categories });
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const subcategory = { ...this.state.subcategory };
    this.setState({ subcategory });
    service.addSubCategory(this.state.subcategory);
  };
  handleChange = ({ currentTarget: input }) => {
    const subcategory = { ...this.state.subcategory };
    subcategory[input.name] = input.value;
    this.setState({ subcategory });
  };
  handleCategoryChange = ({ currentTarget: input }) => {
    const subcategory = { ...this.state.subcategory };
    subcategory.ctg[input.name] = input.value;
    this.setState({ subcategory });
  };

  render() {
    const { subcategory, categories } = this.state;

    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Add Subcategory</h1>
        <form onSubmit={this.handleSubmit}>
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
          <input
            type="text"
            id="subCtgNameInput"
            className="form-control"
            placeholder="Enter subcategory"
            name="subCtgName"
            value={subcategory.subCtgName}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary"
            style={{ marginLeft: "40%", width: "20%" }}
          >
            Add Subcategory
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddSubCategory;
