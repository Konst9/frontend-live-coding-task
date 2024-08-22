import React, { useState } from 'react';
import { LinkedProduct } from '../../../models';
import { useLoadLinkedProducts } from '../../hooks/useLoadLinkedProducts';
import { useParams } from 'react-router-dom';
import { Modal } from '../common/modal';

export const OtherProducts: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedProduct, setSelectedProduct] = useState<LinkedProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { otherProducts } = useLoadLinkedProducts(productId);

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
