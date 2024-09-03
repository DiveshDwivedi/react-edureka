import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const CartItem = (props) => {
  const { id, title, price } = props.data;
  const { quantity } = props.book_qty;
 
  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
 
  return (
    <div className="cartItem">
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;