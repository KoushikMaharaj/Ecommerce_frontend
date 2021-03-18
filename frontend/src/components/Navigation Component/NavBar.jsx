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
  renderUserName = () => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    if (user === null) {
      return "Welcome Guest";
    } else {
      return `Welcome ${user.userName}`;
    }
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="$">
          Navbar
        </a>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fa fa-home fa-fw" aria-hidden="true" />
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="fa fa-sign-in" aria-hidden="true" /> Login
                <span className="sr-only">(current)</span>
              </Link>
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
          <div style={{ color: "white" }}>{this.renderUserName()}</div>
        </div>
        <details style={{ color: "white" }}>
          <summary style={{ display: "block" }}>
            <i className="fa fa-user-circle fa-2x" aria-hidden="true" />
          </summary>
          <div>
            <Link className="nav-link" to="/logout" style={{ color: "wheat" }}>
              <i className="fa fa-sign-out" aria-hidden="true" />
              LogOut
            </Link>
          </div>
        </details>
      </nav>
    );
  }
}

export default NavBar;
