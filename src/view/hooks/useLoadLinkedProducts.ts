import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLinkedProducts } from '../../store/actions/product-page';
import { products } from '../../gateways/api';
import { LinkedProduct } from '../../models';
import { useFindCategory } from './useFindCategory';

export const useLoadLinkedProducts = (productId: string | undefined) => {
  const dispatch = useDispatch();
  const findCategory = useFindCategory();

  useEffect(() => {
    if (productId) {
      const selectedProduct = products.find(p => p.id === productId);
      if (selectedProduct) {
        const selectedCategory = findCategory(selectedProduct.categoryId);

        const analogProducts: LinkedProduct[] = products
          .filter(p => p.categoryId === selectedProduct.categoryId && p.id !== selectedProduct.id)
          .map(p => ({
            ...p,
            linkType: 'analog',
          }));

        const relatedProducts: LinkedProduct[] = products
          .filter(p => {
            const pCategory = findCategory(p.categoryId);
            return pCategory && pCategory.id !== selectedCategory?.id;
          })
          .map(p => ({
            ...p,
            linkType: 'related',
          }));

        const analogRelatedLinkedProducts = [...analogProducts, ...relatedProducts];

        const allLinkedProductIds = new Set(analogRelatedLinkedProducts.map(p => p.id));

        const otherProducts: LinkedProduct[] = products
          .filter(p => !allLinkedProductIds.has(p.id) && p.id !== selectedProduct.id)
          .map(p => ({
            ...p,
            linkType: 'other',
          }) as LinkedProduct);

        const allLinkedProducts = [...analogRelatedLinkedProducts, ...otherProducts];

        dispatch(setLinkedProducts(allLinkedProducts));
      }
    }
  }, [dispatch, productId, findCategory]);
};
