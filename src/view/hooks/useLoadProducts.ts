import {useEffect, useState} from 'react';
import {Product} from "../../models";
import {MockProductPageGateway} from "../../gateways/product-page";

export const useLoadProduct = (productId?: string) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const gateway = new MockProductPageGateway();
    if (productId) {
      gateway.getProduct(productId)
        .then(fetchedProduct => setProduct(fetchedProduct))
        .catch(error => console.error(error));
    } else {
      console.error('Product ID is undefined');
    }
  }, [productId]);

  return product;
};