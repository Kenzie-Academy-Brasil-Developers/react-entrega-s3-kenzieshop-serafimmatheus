import { combineReducers, createStore, applyMiddleware } from "redux";

import { reducersProducts } from "./modules/products/reducers";
import { reducersProductsFilter } from "./modules/products/reducers";

import thunk from "redux-thunk";

const reducer = combineReducers({
  products: reducersProducts,
  productsFilter: reducersProductsFilter,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
