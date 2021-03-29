import React, { Component } from "react";
import service from "../../services/adminService";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddCategory from "./AddCategoryComponent/AddCategory";
import AddSubCategory from "./AddSubCategory";
import AdminRegistrationForm from "./AdminRegistrationComponent/AdminRegistrationForm";
import AddProduct from "./AddProduct";
import "./AdminComponent.css";
import ShowProducts from "./ShowProducts";
import Orders from "./ShowAllOrders";

class AdminComponent extends Component {
  state = {
    admins: [],
  };

  componentDidMount() {
    service.getAllAdmins().then((response) => {
      const admins = response.data;
      this.setState({ admins });
    });
  }

  checkUser = () => {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    if (user === null || user.role !== "ADMIN") {
      return (
        <div className="alert alert-danger " id="error">
          Please Login as Admin
        </div>
      );
    }
    return (
      <div>
        {" "}
        <table
          className="table"
          style={{
            textAlign: "center",
            width: "50%",
            margin: "auto",
            border: "1px solid black",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {this.state.admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.userName}</td>
                <td>{admin.userEmail}</td>
                <td>{admin.userContact}</td>

                <td>
                  {user.id !== admin.id ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => this.handleDelete(admin.id)}
                    >
                      Delete
                    </button>
                  ) : (
                    <button className="btn btn-primary" disabled>
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="design">
          <Router>
            <Link to="/admin/register">
              <button className="btn btn-primary">Register Admin</button>
              {"          "}
            </Link>
            <Route
              
              path="/admin/register"
              component={AdminRegistrationForm}
            />
            <Link to="/admin/category">
              <button className="btn btn-primary">Add Category</button>
              {"          "}
            </Link>
            <Route exact path="/admin/category" component={AddCategory} />
            <Link to="/admin/subcategory">
              <button className="btn btn-primary">Add Subcategory</button>
              {"          "}
            </Link>
            <Route exact path="/admin/subcategory" component={AddSubCategory} />

            <Link to="/admin/product">
              <button className="btn btn-primary">Add Product</button>
              {"          "}
            </Link>
            <Route exact path="/admin/product" component={AddProduct} />
            <Link to="/showproducts">
              <button className="btn btn-primary">Show Products</button>
              {"          "}
            </Link>
            <Route exact path="/showproducts" component={ShowProducts} />
            <Link to="/showorders">
              <button className="btn btn-primary">Show Orders</button>
              {"          "}
            </Link>
            <Route exact path="/showorders" component={Orders} />
          </Router>
        </div>
      </div>
    );
  };

  handleUpdate = (id) => {
    console.log(`updated ${id}`);
  };

  handleDelete = (id) => {
    service.deleteAdmin(id);
  };

  render() {
    return <React.Fragment>{this.checkUser()}</React.Fragment>;
  }
}

export default AdminComponent;
