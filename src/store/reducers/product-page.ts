import { createReducer } from '@reduxjs/toolkit';
import { LinkedProduct, Product } from '../../models';
import {addProductToCompareList, setLinkedProducts, setProduct} from "../actions/product-page";

type CatalogPageState = {
  product: Product | undefined;
  linkedProducts: LinkedProduct[] | undefined;
  comparingProducts: Product[] | undefined;
};

const defaultState: CatalogPageState = {
  product: undefined,
  linkedProducts: undefined,
  comparingProducts: undefined,
};



export const productPageReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(setProduct, (state, action) => {
      state.product = action.payload;
    })
    .addCase(setLinkedProducts, (state, action) => {
      state.linkedProducts = action.payload;
    })
    .addCase(addProductToCompareList, (state, action) => {
      if (!state.comparingProducts) {
        state.comparingProducts = [action.payload];
      } else {
        state.comparingProducts.push(action.payload);
      }
    });
});
