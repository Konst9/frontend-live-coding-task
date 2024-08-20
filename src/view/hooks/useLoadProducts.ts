import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../store/actions/product-page';
import { products } from '../../gateways/api';

export const useLoadProduct = (productId?: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const productData = products.find(p => p.id === productId) || null;
    if (productData) {
      dispatch(setProduct(productData));
    }
  }, [dispatch, productId]);
};
