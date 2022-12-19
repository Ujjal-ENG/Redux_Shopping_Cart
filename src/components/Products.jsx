import React, { useEffect } from "react";

import { add } from "../store/cartSlice";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, STATUESES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    //   const fetchProduct = async () => {
    //     const res = await fetch("https://fakestoreapi.com/products");

    //     const data = await res.json();
    //     console.log(data);

    //     setProducts(data);
    //   };
    //   fetchProduct();

    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    //strore the product store in redux store
    dispatch(add(product));
  };

  if (status === STATUESES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUESES.ERROR) {
    return <h2>SomeThing Went Wrong</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
