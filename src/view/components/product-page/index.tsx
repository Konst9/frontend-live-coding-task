import React, { FC } from 'react';
import { ProductCard } from '../Card/ProductCard';
import { AnalogProducts } from "../Card/AnalogProducts";
import { RelatedProducts } from "../Card/RelatedProduct"
import { OtherProducts } from "../Card/OtherProduct";

export const ProductPage: FC = () => {

  return (
    <div className="product-page">
      <ProductCard />
      <h3>Связанные товары:</h3>
      <AnalogProducts />
      <RelatedProducts />
      <OtherProducts />
    </div>
  );
};
