import { Product } from "../types";

type SetAction = { type: 'products/SET'; payload: Product[] };

type Action = SetAction;

const set = (products: Product[]) => ({ type: 'products/SET', payload: products });

export const actions = { set };

const productsReducer = (state:Product[] = [], action: Action): Product[] => {
  switch (action.type) {
    case 'products/SET':
      return [...action.payload];

    default:
      return state;
  }
};

export default productsReducer;