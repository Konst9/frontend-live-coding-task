import React from 'react';
import { LinkedProduct } from '../../../models';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useLoadLinkedProducts } from "../../hooks/useLoadLinkedProducts";
import { useParams } from "react-router-dom";

interface LinkedProductsProps {
  linkedProducts?: LinkedProduct[];
}

export const RelatedProducts: React.FC<LinkedProductsProps> = () => {
  const { productId } = useParams<{ productId: string }>();

  const relatedProducts = useSelector((state: RootState) =>
    state.productPage.linkedProducts?.filter(p => p.linkType === 'related') || []
  );


  useLoadLinkedProducts(productId);

  return (
    <>
      <ul>
        {relatedProducts?.map((linkedProduct) => (
          <li key={linkedProduct.id}>
            Сопутствующий товар:
            <button>{linkedProduct.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};