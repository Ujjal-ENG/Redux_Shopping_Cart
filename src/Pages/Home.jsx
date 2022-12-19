import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">WelCome to the Redux Tool Kit</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
