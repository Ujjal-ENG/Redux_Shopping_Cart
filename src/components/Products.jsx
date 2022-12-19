import React, { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();
      console.log(data);

      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((product) => (
         (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <button className="btn">Add to Cart</button>
          </div>
        )
      ))}
    </div>
  );
};

export default Products;
