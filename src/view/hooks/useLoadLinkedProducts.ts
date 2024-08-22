import { useEffect, useState } from 'react';
import { LinkedProduct } from '../../models';
import { MockProductPageGateway } from '../../gateways/product-page';

interface LinkedProducts {
  analogProducts: LinkedProduct[];
  relatedProducts: LinkedProduct[];
  otherProducts: LinkedProduct[];
}

export const useLoadLinkedProducts = (productId: string | undefined) => {
  const [linkedProducts, setLinkedProducts] = useState<LinkedProducts>({
    analogProducts: [],
    relatedProducts: [],
    otherProducts: []
  });

  useEffect(() => {
    if (productId) {
      const gateway = new MockProductPageGateway();

      Promise.all([
        gateway.getProduct(productId),
        gateway.getLinkedProducts(productId)
      ])
        .then(([product, fetchedProducts]) => {
          const analogProducts: LinkedProduct[] = [];
          const relatedProducts: LinkedProduct[] = [];
          const otherProducts: LinkedProduct[] = [];

          fetchedProducts.forEach((linkedProduct) => {
            const linkedProductWithType: LinkedProduct = {
              ...linkedProduct,
              linkType: 'other'
            };

            if (linkedProduct.category?.id === product.category?.id) {
              linkedProductWithType.linkType = 'analog';
              analogProducts.push(linkedProductWithType);
            } else if (linkedProduct.category?.id?.startsWith(product.category?.id?.split('.')[0] || '')) {
              linkedProductWithType.linkType = 'related';
              relatedProducts.push(linkedProductWithType);
            } else {
              otherProducts.push(linkedProductWithType);
            }
          });

          setLinkedProducts({
            analogProducts,
            relatedProducts,
            otherProducts
          });
        })
        .catch(error => console.error(error));
    } else {
      console.error('Product ID is undefined');
    }
  }, [productId]);

  return linkedProducts;
};
