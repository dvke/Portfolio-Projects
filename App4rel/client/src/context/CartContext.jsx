import React, { createContext, useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);
  // sidebar context
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);

  // retrieve cart from local storage
  useEffect(() => {
    const storedCart = window.localStorage.getItem("Ap4r3l_cart");
    setCart(JSON.parse(storedCart));
  }, []);

  // save cart to local storage
  useEffect(() => {
    window.localStorage.setItem("Ap4r3l_cart", JSON.stringify(cart));
  }, [cart]);

  // update total
  useEffect(() => {
    if (cart) {
      // Add a null check here
      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.attributes.price * currentItem.amount;
      }, 0);
      setTotal(total);
    }
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //   add to cart
  const addToCart = (product, id, amount = product.amount) => {
    const newItem = {
      ...product,
      amount: amount || 1,
    };

    // Check if cart is not null or undefined before using find
    const cartItem = cart && cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart && cart.find((item) => item.id === id); // Add a null check here
    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart && cart.find((item) => item.id === id); // Add a null check here
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount - 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem && cartItem.amount < 2) {
      removeFromCart(cartItem.id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
