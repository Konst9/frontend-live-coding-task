import React, { useState } from 'react';
import { LinkedProduct } from '../../../models';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useLoadLinkedProducts } from "../../hooks/useLoadLinkedProducts";
import { useParams } from "react-router-dom";
import { Modal } from "../common/modal";

interface LinkedProductsProps {
  linkedProducts?: LinkedProduct[];
}

export const OtherProducts: React.FC<LinkedProductsProps> = () => {
  const { productId } = useParams<{ productId: string }>();

  const otherProducts = useSelector((state: RootState) =>
    state.productPage.linkedProducts?.filter(p => p.linkType === 'other') || []
  );

  useLoadLinkedProducts(productId);

  const [selectedProduct, setSelectedProduct] = useState<LinkedProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: LinkedProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <ul>
        {otherProducts?.map((linkedProduct) => (
          <li key={linkedProduct.id}>
            <button onClick={() => openModal(linkedProduct)}>{linkedProduct.name}</button>
          </li>
        ))}
      </ul>
      {isModalOpen && selectedProduct && (
        <Modal onClose={closeModal}>
          <h2>{selectedProduct.name}</h2>
          <p>Цена: {selectedProduct.price}</p>
        </Modal>
      )}
    </>
  );
};