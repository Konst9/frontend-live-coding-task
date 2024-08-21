import { Category } from '../../models';
import { categories } from '../../gateways/api';
import { useCallback } from "react";

export const useFindCategory = () => {
  const findCategory = useCallback((categoryId: string, categoryList: Category[] = categories): Category | undefined => {
    return categoryList.reduce<Category | undefined>((found, category) => {
      if (found) return found;
      if (category.id === categoryId) return category;
      if (category.children) return findCategory(categoryId, category.children);
      return undefined;
    }, undefined);
  }, []);

  return findCategory;
};
