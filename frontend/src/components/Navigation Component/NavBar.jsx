import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    user: {},
    toogle: false,
  };

  componentDidMount() {
    let user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    this.setState({ user });
  }
  renderUserName = () => {
    if (this.state.user === null) {
      return "Hi Guest";
    } else {
      return `Hi ${this.state.user.userName}`;
    }
  };

  handleLogOut = () => {
    console.log("log out clicked");
    window.localStorage.clear();
    window.location.assign("/");
  };

  toogle = () => {
    const toogle = true;
    this.setState({ toogle });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h4 style={{ color: "white" }}>Navbar</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toogle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fa fa-home fa-fw" aria-hidden="true" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  <i className="fa fa-product-hunt" aria-hidden="true" />{" "}
                  Products
                </Link>
              </li>
              <li className="nav-item">
                {!this.state.user && (
                  <Link className="nav-link" to="/login">
                    <i className="fa fa-sign-in" aria-hidden="true" /> Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {this.state.user && this.state.user.role === "ADMIN" && (
                  <Link className="nav-link" to="/admin">
                    <i className="fa fa-file" aria-hidden="true" /> Admin Page
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <details style={{ color: "white" }}>
            <summary style={{ display: "block" }}>
              <div style={{ color: "white" }}>{this.renderUserName()}</div>
              <i
                className="fa fa-user-circle fa-2x"
                aria-hidden="true"
                style={{ marginLeft: "1rem" }}
              />
            </summary>
            {this.state.user && (
              <div style={{ verticalAlign: "baseline" }}>
                <Link
                  className="nav-link"
                  to="/user/profile"
                  style={{ color: "wheat" }}
                >
                  <i className="fa fa-user" aria-hidden="true" />{" "}
                  <b>
                    <i>Profile</i>
                  </b>
                </Link>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={this.handleLogOut}
                  style={{ color: "wheat" }}
                >
                  <i className="fa fa-sign-out" aria-hidden="true" />{" "}
                  <b>
                    <i>Log Out</i>
                  </b>
                </Link>
              </div>
            )}
          </details>
        </nav>
      </div>
    );
  }
}

export default NavBar;
