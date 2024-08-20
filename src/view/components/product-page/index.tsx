import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../../../store';
import { ProductCard } from '../Card/ProductCard';
import {useLoadProduct} from "../../hooks/useLoadProducts";
import {useParams} from "react-router-dom";
import {useLoadLinkedProducts} from "../../hooks/useLoadLinkedProducts";
import {LinkedProducts} from "../Card/LinkedProducts";

export const ProductPage: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) => state.productPage.product || null);
  const linkedProducts = useSelector((state: RootState) => state.productPage.linkedProducts);

  useLoadProduct(productId);
  useLoadLinkedProducts(productId);



  return (
    <div className="product-page">
      <ProductCard product={product} />
      <LinkedProducts linkedProducts={linkedProducts} />
    </div>
  );
};
