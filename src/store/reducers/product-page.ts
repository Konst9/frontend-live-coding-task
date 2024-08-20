import { createReducer } from '@reduxjs/toolkit';
import { LinkedProduct, Product } from '../../models';
import { setProduct } from "../actions/product-page";

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
});
