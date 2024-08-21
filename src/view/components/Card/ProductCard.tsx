import React from 'react';
import './productCard.css'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useLoadProduct } from "../../hooks/useLoadProducts";

export const ProductCard: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) => state.productPage.product || null);

  useLoadProduct(productId);

  if (!product) {
    return <p>Товар не найден</p>;
  }

  return (
    <div className="product-card-item">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  );
};