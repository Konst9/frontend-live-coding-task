import React from 'react';
import { LinkedProduct } from '../../../models';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useLoadLinkedProducts } from "../../hooks/useLoadLinkedProducts";
import { useParams } from "react-router-dom";

interface LinkedProductsProps {
  linkedProducts?: LinkedProduct[];
}

export const OtherProducts: React.FC<LinkedProductsProps> = () => {
  const { productId } = useParams<{ productId: string }>();

  const otherProducts = useSelector((state: RootState) =>
    state.productPage.linkedProducts?.filter(p => p.linkType === 'other') || []
  );

  useLoadLinkedProducts(productId);

  return (
    <>
      <ul>
        {otherProducts?.map((linkedProduct) => (
          <li key={linkedProduct.id}>
            <button>{linkedProduct.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};