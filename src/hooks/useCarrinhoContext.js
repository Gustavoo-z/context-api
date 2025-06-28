import { useContext } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import {
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  UPDATE_PRODUTO,
} from "../reducers/carrinhoReducer";

const addProdutoAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

const removeProdutoAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

const updateProdutoAction = (produtoId, quantidade) => ({
  type: UPDATE_PRODUTO,
  payload: { produtoId, quantidade },
});

export const useCarrinhoContext = () => {
  const { carrinho, dispatch, valorTotal, quantidade } =
    useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    dispatch(addProdutoAction(novoProduto));
  }

  function removerProduto(produtoId) {
    const produto = carrinho.find(
      (itemDoCarrinho) => itemDoCarrinho.id === produtoId
    );
    if (produto && produto.quantidade > 1) {
      dispatch(updateProdutoAction(produtoId, produto.quantidade - 1));
    } else {
      dispatch(removeProdutoAction(produtoId));
    }
  }

  function removerProdutoCarrinho(id) {
    dispatch(removeProdutoAction(id));
  }

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  };
};
