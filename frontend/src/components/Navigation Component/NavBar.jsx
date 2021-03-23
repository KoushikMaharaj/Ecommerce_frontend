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
      return <span>Hi {this.state.user.userName}</span>;
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
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "MediumAquaMarine" }}
        >
          <i /* class="fa fa-desktop fa-3x" aria-hidden="true" */>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/desktop-computer-2081419-1751440.png"
              alt="pc"
              width="50px"
            />
          </i>
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
                { (
                  <Link className="nav-link" to="/aboutus">
                    <i className="fa fa-sign-in" aria-hidden="true" /> AboutUs
                  </Link>
                )}
              </li>
              <li className="nav-item">
                { (
                  <Link className="nav-link" to="/contactus">
                    <i className="fa fa-sign-in" aria-hidden="true" /> ContactUs
                  </Link>
                )}
              </li>
              {this.state.user && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/showcart"
                    style={{ marginLeft: "55rem" }}
                  >
                    <i /* class="fa fa-shopping-cart" aria-hidden="true" */>
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
                  style={{ color: "white" }}
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
