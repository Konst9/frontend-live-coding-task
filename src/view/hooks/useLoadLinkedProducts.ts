import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLinkedProducts } from '../../store/actions/product-page';
import { products } from '../../gateways/api';
import { LinkedProduct } from '../../models';

export const useLoadLinkedProducts = (productId: string | undefined) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      const selectedProduct = products.find(p => p.id === productId);
      if (selectedProduct) {
        const relatedProducts: LinkedProduct[] = products
          .filter(p => p.categoryId === selectedProduct.categoryId && p.id !== selectedProduct.id)
          .map(p => ({
            ...p,
            linkType: 'related'
          }));

        dispatch(setLinkedProducts(relatedProducts));
      }
    }
  }, [dispatch, productId]);
};