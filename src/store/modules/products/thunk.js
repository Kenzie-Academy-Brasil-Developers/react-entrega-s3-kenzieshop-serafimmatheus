import { addProductsList } from "./actions";

export const addProductsListThunk = (lista) => {
  return (dispatch, getState) => {
    dispatch(addProductsList(lista));
  };
};
