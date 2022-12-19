import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div id="kopa">
        <span className="logo">Redux Store</span>

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
