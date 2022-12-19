import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {cartItems.map((item) => {
          return (
            <>
              <div className="cartCard" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <h5>${item.price}</h5>
                <button className="btn" onClick={() => handleRemove(item.id)}>
                  Remove Items
                </button>
              </div>
              
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
