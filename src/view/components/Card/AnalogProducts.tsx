import React from 'react';
import { LinkedProduct } from '../../../models';
import {useDispatch} from "react-redux";
import { useLoadLinkedProducts } from "../../hooks/useLoadLinkedProducts";
import { useParams } from "react-router-dom";
import { addProductToCompareList } from "../../../store/actions/product-page";

export const AnalogProducts: React.FC = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();

  const { analogProducts } = useLoadLinkedProducts(productId);

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
