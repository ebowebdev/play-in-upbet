import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
