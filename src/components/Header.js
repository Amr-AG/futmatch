import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <Link to={"/"}>
        <h2 className="logo">FutMatch</h2>
      </Link>
      <ul>
      <NavLink to={"fixture"}>
             <li>Fixture</li>
      </NavLink>

      </ul>
    </header>
  );
};

export default Header;
