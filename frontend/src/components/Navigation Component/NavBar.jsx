import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    user: {},
    toogle: false,
  };

  componentDidMount() {
    let user = JSON.parse(window.sessionStorage.getItem("user"));
    this.setState({ user });
  }
  renderUserName = () => {
    if (this.state.user === null) {
      return "Hi Guest";
    } else {
      return <span>Hi {this.state.user.userName}</span>;
    }
  };

  handleLogOut = () => {
    window.sessionStorage.clear();
    window.location.assign("/");
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "MediumAquaMarine" }}
        >
          <Link className="nav-link" to="/">
            <i>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/desktop-computer-2081419-1751440.png"
                alt="pc"
                width="50px"
              />
            </i>
          </Link>
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
            <ul className="navbar-nav mr-auto" style={{ marginLeft: "1.5rem" }}>
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
                    <i className="fa fa-file" aria-hidden="true" /> AdminPage
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {
                  <Link className="nav-link" to="/aboutus">
                    <i className="fa fa-info-circle" aria-hidden="true" />{" "}
                    AboutUs
                  </Link>
                }
              </li>
              <li className="nav-item">
                {
                  <Link className="nav-link" to="/contactus">
                    <i className="fa fa-phone" aria-hidden="true" /> ContactUs
                  </Link>
                }
              </li>

              {this.state.user && this.state.user.role === "CUSTOMER" && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/showcart"
                    style={{ marginLeft: "40rem" }}
                  >
                    <i>
                      <img
                        src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                        alt="cart"
                        width="30px"
                      />
                    </i>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <details style={{ color: "white", marginRight: "2rem" }}>
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
                {this.state.user.role !== "ADMIN" && (
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
                )}
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={this.handleLogOut}
                  style={{ color: "wheat" }}
                >
                  <i className="fa fa-sign-out" aria-hidden="true" />{" "}
                  <b>
                    <i>LogOut</i>
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
