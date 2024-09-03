import { createContext, useState } from "react";
import { addCart, fetchBooks } from "../services/api";

export const ShopContext = createContext(null);

const books = await fetchBooks();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < books.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = books.find((book) => Number(book.id) === Number(item));
        
        totalAmount += cartItems[item] * itemInfo?.price;
      }
    }
    
    return totalAmount;
  };

  const addToCart = async (itemId) => {
    const bookId = itemId;

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    let cart = 
      {
        userId: 21,
        books: [
          {
            bookId: Number(bookId),
            quantity: 1
          }
        ]
      }
    ;



    console.log(cartItems[bookId], ' items field ', bookId);
    
    const response = await addCart(cart);

    console.log(response, ' res');
    
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = { cartItems, getTotalCartAmount, addToCart, removeFromCart, updateCartItemCount, checkout };


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
