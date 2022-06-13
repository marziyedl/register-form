import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <Nav className="py-2 bg-dark navbar-dark">
      <NavItem>
        <span className="mx-2">
          <Link className="navbar-text text-decoration-none " to={"/"}>
            Home
          </Link>
        </span>
      </NavItem>
      <NavItem className="mx-2">
        <span>
          <Link className="navbar-text text-decoration-none" to={"/register"}>
            Register
          </Link>
        </span>
      </NavItem>
    </Nav>
  );
}

export default NavBar;
