import { createContext, useEffect, useState, type ReactNode } from 'react';

import { type CartItem, type Product, type StorageProps } from '../../core/constants/types';
import { PRODUCTS } from '../../pages/home/data.example';

import { getLS, setLS } from '../../core/helpers/storageHelper';

const defaultValue: StorageProps = {
  products: [],
  setProducts: () => {},
  cartItems: [],
  setCartItems: () => {},
};

export const Storage = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const saveCartToLocalStorage = (): void => {
    const cartJSON = JSON.stringify(cartItems);
    setLS('cart', cartJSON);
  };

  const loadCartFromLocalStorage = (): void => {
    const cartValue = getLS('cart');
    if (cartValue) {
      try {
        const localCartData: CartItem[] = JSON.parse(cartValue);
        if (Array.isArray(localCartData)) {
          setCartItems(localCartData);
        }
      } catch (error) {
        console.log(error);
        setCartItems([]);
      }
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  useEffect(() => {
    saveCartToLocalStorage();
  }, [cartItems]);

  return (
    <StorageContext.Provider value={{ products, setProducts, cartItems, setCartItems }}>
      {children}
    </StorageContext.Provider>
  );
};

export const StorageContext = createContext(defaultValue);
