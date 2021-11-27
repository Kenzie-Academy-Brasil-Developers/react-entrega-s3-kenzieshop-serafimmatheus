import { ADD_PRODUCTS, REMUVE_PRODUCTS } from "./actionsTypes";

const initialState = [
  {
    id: 1,
    name: "iPhone 12 Apple 64GB - PRODUCT (RED) - Tela 6,1” 12MP iOS",
    price: 4.499,
    image:
      "https://a-static.mlcdn.com.br/618x463/iphone-12-apple-64gb-product-red-tela-61-12mp-ios/magazineluiza/231147500/6dc84326e6ec9aa975aa2762a5651c18.jpg",
  },
  {
    id: 2,
    name: "iPhone XR Apple 128GB Amarelo 6,1” 12MP iOS",
    price: 5.114,
    image:
      "https://a-static.mlcdn.com.br/618x463/iphone-xr-apple-128gb-amarelo-61-12mp-ios/magazineluiza/222382800/d189d0133d25c2fcb28d56c0762eaf1e.jpg",
  },

  {
    id: 3,
    name: "iPhone XR Apple 128GB Branco 6,1” 12MP iOS",
    price: 5.499,
    image:
      "https://a-static.mlcdn.com.br/618x463/iphone-xr-apple-128gb-branco-61-12mp-ios/magazineluiza/222382600/729e815efaa5af3ee21660508e50db5c.jpg",
  },

  {
    id: 4,
    name: "iPhone SE Apple (64GB) Vermelho, Tela de 4,7”, 4G e Câmera de 12 MP",
    price: 3.573,
    image:
      "https://a-static.mlcdn.com.br/618x463/iphone-se-apple-64gb-vermelho-tela-de-47-4g-e-camera-de-12-mp/fastshop2/aemhgr3bravrmb/32c1b7f9e5a8fcad3a60987631626b6e.jpg",
  },
];

export const reducersProducts = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const reducersProductsFilter = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      localStorage.setItem(
        "@Cards:",
        JSON.stringify([...state, action.product])
      );
      return [...state, action.product];

    case REMUVE_PRODUCTS:
      return state.filter((elem) => elem.id !== action.id);

    default:
      return state;
  }
};
