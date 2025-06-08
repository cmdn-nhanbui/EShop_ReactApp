import { createContext, useState, type ReactNode } from 'react';

import { type Product, type StorageProps } from '../../core/constants/types';
import { PRODUCTS } from '../../pages/home/data.example';

const defaultValue: StorageProps = {
  products: [],
  setProducts: () => {},
};

export const Storage = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  return <StorageContext.Provider value={{ products, setProducts }}>{children}</StorageContext.Provider>;
};

export const StorageContext = createContext(defaultValue);
