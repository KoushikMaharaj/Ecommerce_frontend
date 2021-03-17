import React, { Component } from "react";
import service from "../../services/adminService";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";

class AdminComponent extends Component {
  state = {
    admins: [],
  };

  componentDidMount() {
    service.getAllAdmins().then((response) => {
      console.log(response.data);
      const admins = response.data;
      this.setState({ admins });
      console.log(`Admins : ${JSON.stringify(this.state.admins[0].userName)}`);
    });
  }

  render() {
    const { admins } = this.state;
    return (
      <React.Fragment>
        <table
          className="table"
          style={{
            width: "50%",
            margin: "auto",
            border: "1px solid black",
            marginTop: "2rem",
            marginBottom:"3rem"
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
                <td>Delete</td>
                <td>Update</td>
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
            </Link>
            <Route exact path="/admin/subcategory" component={AddSubCategory} />
          </Router>
        </div>
        
      </React.Fragment>
    );
  }
}

export default AdminComponent;
