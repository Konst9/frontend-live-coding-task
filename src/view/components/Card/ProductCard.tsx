import React from 'react';
import { Product } from '../../../models'
import './productCard.css'

interface ProductCardProps {
  product: Product | null;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

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