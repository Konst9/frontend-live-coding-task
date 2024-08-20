import React from 'react';
import { LinkedProduct } from '../../../models';

interface LinkedProductsProps {
  linkedProducts?: LinkedProduct[];
}

export const LinkedProducts: React.FC<LinkedProductsProps> = ({ linkedProducts = [] }) => {
  return (
    <div className="linked-products">
      {linkedProducts.length > 0 ? (
        <>
          <h3>Связанные товары:</h3>
          <ul>
            {linkedProducts.map((linkedProduct) => (
              <li key={linkedProduct.id}>
                Аналог: <button>{linkedProduct.name}</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Связанные товары не найдены.</p>
      )}
    </div>
  );
};