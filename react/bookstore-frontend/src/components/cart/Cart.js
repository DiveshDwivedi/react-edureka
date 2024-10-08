import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { fetchBooks } from "../../services/api";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooksList = async () => {
      try {
        const fetchBooksList = await fetchBooks();
        setBooks(fetchBooksList);
      } catch (error) {
        console.log("Error Occured while fetching book details  ", error);
      }
    };
    fetchBooksList();
  }, []);

  const { cartItem, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {books.map((product) => {
          const item = cartItem.filter((cart) => cart.userId == 5 &&
            cart?.books?.some((id) => product.id == id.bookId)
          );

          if (item.length !== 0) {
            const book_qty = item.map((data) => {
              return data.books.filter((book) => book.bookId == product.id)[0];
            });
            return <CartItem data={product} book_qty={book_qty[0]} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
