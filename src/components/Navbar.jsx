import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  
  const items = useSelector((state) => state.cart);

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
        <span className="cartCount">Cart Items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
