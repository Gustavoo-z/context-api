import React from "react";

export const CarrinhoContext = React.createContext();

export const CarrinhoProvider = ({ children }) => {
  return <CarrinhoContext.Provider>{children}</CarrinhoContext.Provider>;
};
