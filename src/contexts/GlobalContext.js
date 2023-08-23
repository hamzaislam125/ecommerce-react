import React, { createContext, useReducer } from "react";
import { cartReducers } from "../reducers/cartReducers";

const initialState = {
  count: 0,
  products: {},
  cartOpen: false
};

export const GlobalContext = createContext(initialState);
export const GlobalDispatchContext = createContext(null);
const GlobalContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducers, initialState);
  return (
    <GlobalContext.Provider value={ cartItems}>
      <GlobalDispatchContext.Provider value={ dispatch}>
      {children}
      </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
