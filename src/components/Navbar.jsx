import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items: 0</span>
      </div>
    </div>
  );
};

export default Navbar;
