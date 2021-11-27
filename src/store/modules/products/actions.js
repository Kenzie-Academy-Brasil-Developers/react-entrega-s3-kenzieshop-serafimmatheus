import { ADD_PRODUCTS, REMUVE_PRODUCTS } from "./actionsTypes";

export const addProductsList = (product) => {
  return {
    type: ADD_PRODUCTS,
    product,
  };
};

export const removeProductsList = (id) => {
  return {
    type: REMUVE_PRODUCTS,
    id,
  };
};
