import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        valorTotal,
        setValorTotal,
        quantidade,
        setQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
