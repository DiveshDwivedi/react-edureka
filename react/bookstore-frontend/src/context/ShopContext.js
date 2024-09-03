import { createContext, useState } from "react";
import { addCart, fetchBooks, getCartItems } from "../services/api";

export const ShopContext = createContext(null);
const books = await fetchBooks();
const data = await getCartItems();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < books.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartItem] = useState(data);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item of cartItem) {
      if (item.userId == 5) {
        const book_id = item.books.filter((book) => book.bookId);

        let itemInfo = books.filter((book) => {
          return book_id.find((id) => id.bookId == book.id);
        });

        book_id.map((book) => {
          itemInfo.find((item) => {
            if (item.id == book.bookId) {
              return (totalAmount += item.price * book.quantity);
            }
          });
        });
      }
    }

    return totalAmount;
  };

  const addToCart = async (itemId) => {
    const bookId = itemId;
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    let cart = {
      userId: 21,
      books: [
        {
          bookId: Number(bookId),
          quantity: 1,
        },
      ],
    };
    const response = await addCart(cart);
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

  const contextValue = {
    cartItems,
    cartItem,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
