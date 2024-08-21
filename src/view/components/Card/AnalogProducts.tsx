import React from 'react';
import { LinkedProduct } from '../../../models';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useLoadLinkedProducts } from "../../hooks/useLoadLinkedProducts";
import { useParams } from "react-router-dom";
import { addProductToCompareList } from "../../../store/actions/product-page";

interface LinkedProductsProps {
  linkedProducts?: LinkedProduct[];
}

export const AnalogProducts: React.FC<LinkedProductsProps> = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();

  const analogProducts = useSelector((state: RootState) =>
    state.productPage.linkedProducts?.filter(p => p.linkType === 'analog') || []
  );

  useLoadLinkedProducts(productId);

  const handleAddToCompare = (product: LinkedProduct) => {
    dispatch(addProductToCompareList(product));
  };

  return (
    <ul>
      {analogProducts?.map((linkedProduct) => (
        <li key={linkedProduct.id}>
          Аналог:
          <button onClick={() => handleAddToCompare(linkedProduct)}>{linkedProduct.name}</button>
        </li>
      ))}
    </ul>
  );
};