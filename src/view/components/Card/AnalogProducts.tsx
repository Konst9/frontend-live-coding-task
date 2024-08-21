import React from 'react';
import { LinkedProduct } from '../../../models';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useLoadLinkedProducts } from "../../hooks/useLoadLinkedProducts";
import { useParams } from "react-router-dom";

interface LinkedProductsProps {
  linkedProducts?: LinkedProduct[];
}

export const AnalogProducts: React.FC<LinkedProductsProps> = () => {
  const { productId } = useParams<{ productId: string }>();

  const analogProducts = useSelector((state: RootState) =>
    state.productPage.linkedProducts?.filter(p => p.linkType === 'analog') || []
  );

  useLoadLinkedProducts(productId);

  return (
    <>
      <ul>
        {analogProducts?.map((linkedProduct) => (
          <li key={linkedProduct.id}>
            Аналог:
            <button>{linkedProduct.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};