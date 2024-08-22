/**
 * Категория
 */
export type Category = {
  id: string;
  name: string;
  children?: Category[];
};

/**
 * Товар
 */
export type Product = {
  id: string;
  name: string;
  price: number;
  category?: Partial<Category>;
};

/**
 * Тип связи с товаром
 *
 * analog – Аналог
 * related – Сопутствующий товар
 * other - Остальные товары
 */
export type ProductLinkType = 'analog' | 'related' | 'other' | undefined;

/**
 * Связанный товар
 */
export type LinkedProduct = Product & {
  linkType: ProductLinkType;
};
