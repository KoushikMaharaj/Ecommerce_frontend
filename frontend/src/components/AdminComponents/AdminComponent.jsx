import React, { Component } from "react";
import service from "../../services/adminService";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";
import AdminRegistrationForm from "./AdminRegistrationComponent/AdminRegistrationForm";
import AddProduct from './AddProduct';

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

  handleUpdate = (id) => {
    console.log(`updated ${id}`);
  };

  handleDelete = (id) => {
    console.log(`deleted ${id}`);
  };

  render() {
    const { admins } = this.state;
    return (
      <React.Fragment>
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
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.userName}</td>
                <td>{admin.userEmail}</td>
                <td>{admin.userContact}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleUpdate(admin.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleDelete(admin.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Router>
            <Link to="/admin/category">
              <button>Add Category</button>
              {"          "}
            </Link>
            <Route exact path="/admin/category" component={AddCategory} />
            <Link to="/admin/subcategory">
              <button>Add Subcategory</button>
              {"          "}
            </Link>
            <Route exact path="/admin/subcategory" component={AddSubCategory} />
            <Link to="/admin/register">
              <button>Register Admin</button>
              {"          "}
            </Link>
            <Route
              exact
              path="/admin/register"
              component={AdminRegistrationForm}
            />

            <Link to="/admin/product">
              <button>Add Product</button>
              {"          "}
            </Link>
            <Route
              exact
              path="/admin/product"
              component={AddProduct}
            />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminComponent;
