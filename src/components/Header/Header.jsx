import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>header</h2>
      <nav>
        {/* <a href="/">Home</a>
        <a href="mobiles">Mobile</a>
        <a href="laptops">Laptop</a>
        <a href=""></a> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users-2</NavLink>
      </nav>
    </div>
  );
};

export default Header;
