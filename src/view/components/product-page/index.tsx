import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ProductCard } from '../Card/ProductCard';
import {useLoadProduct} from "../../hooks/useLoadProducts";
import {useParams} from "react-router-dom";

export const ProductPage: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) => state.productPage.product || null);

  useLoadProduct(productId);


  return (
    <div className="product-page">
      <div className="product-card">
        <ProductCard product={product} />
      </div>
    </div>
  );
};
