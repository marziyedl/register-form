import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function NavBar() {
  return (
    <Nav>
      <NavItem>
        <span className="mx-2">
          <Link to={"/"}>Home</Link>
        </span>
      </NavItem>
      <NavItem className="mx-2">
        <span>
          <Link to={"/register"}>Register</Link>
        </span>
      </NavItem>
    </Nav>
  );
}

export default NavBar;
