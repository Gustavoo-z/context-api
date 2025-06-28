import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
  const [valorTotal, setValorTotal] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acc, produto) => ({
        totalTemp: acc.totalTemp + produto.preco * produto.quantidade,
        quantidadeTemp: acc.quantidadeTemp + produto.quantidade,
      }),
      { totalTemp: 0, quantidadeTemp: 0 }
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  });

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        valorTotal,
        quantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
