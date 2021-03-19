import React from "react";
import { Link } from "react-router-dom";
/* import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"; */

class NavBar extends React.Component {
  state = {
    user: {},
  };
  /* return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
    // /* {/* <div classNameName="link">
    //   <Link to="/">Home</Link>
    //   <Link to="/login">Login</Link>
    //   {<Link to="/register">Register</Link>}
    // </div>
  ); */
  /*  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  ); */
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
    window.location.assign("/home");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h4 style={{ color: "white" }}>Navbar</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="#navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fa fa-home fa-fw" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                <i className="fa fa-product-hunt" aria-hidden="true" />
                {" "}Products
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

          {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
        </div>

        <details style={{ color: "white" }}>
          <summary style={{ display: "block" }}>
            <div style={{ color: "white" }}>{this.renderUserName()}</div>
            <i className="fa fa-user-circle fa-2x" aria-hidden="true" style={{marginLeft:"1rem"}}/>
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
    );
  }
}

export default NavBar;
