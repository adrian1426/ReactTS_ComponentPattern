export interface Product {
  id: string;
  title: string;
  img?: string;
};

export interface Props {
  product: Product;
  value?: any,
  onChange?: (product: Product, number: number) => void;
};
