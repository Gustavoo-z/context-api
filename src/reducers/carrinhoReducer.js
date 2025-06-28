export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_PRODUTO = "UPDATE_PRODUTO";

export const carrinhoReducer = (carrinho, action) => {
  switch (action.type) {
    case ADD_PRODUTO:
      const novoProduto = action.payload;
      const produto = carrinho.findIndex((item) => item.id === novoProduto.id);
      if (produto === -1) {
        novoProduto.quantidade = 1;
        return [...carrinho, novoProduto];
      } else {
        return carrinho.map((item, index) => {
          return index === produto
            ? { ...item, quantidade: item.quantidade + 1 }
            : item;
        });
      }
    case REMOVE_PRODUTO:
      const produtoId = action.payload;
      return carrinho.filter((item) => item.id !== produtoId);
    case UPDATE_PRODUTO:
      const { produtoId: id, quantidade } = action.payload;
      return carrinho.map((item) => {
        return item.id === id ? { ...item, quantidade } : item;
      });
    default:
      return carrinho;
  }
};
