import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = { children: PropTypes.node };
