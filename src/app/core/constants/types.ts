import type { ReactNode } from 'react';
import type React from 'react';

export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  discountValue: number;
}

export interface StorageProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

type Variant = 'TEXT' | 'OUTLINED' | 'CONTAINED';
type Color = 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: Variant;
  color?: Color;
  rounded?: boolean;
}

export interface ChooseItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductCardProps extends Product {}

export interface Toast {
  id: string;
  message: string;
  duration?: number;
  type?: (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
}

export interface ToastContainerProps {
  toasts: Toast[];
}

export type ShowToastOptions = Omit<Toast, 'id'>;

export interface BadgeProps {
  children: ReactNode;
  className?: string;
  color?: 'PRIMARY' | 'DANGER';
}

export interface CounterProps {
  value: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

export type ToastContextType = {
  showToast: ({ type, message, duration }: ShowToastOptions) => void;
};

export interface ErrorProps {
  status: number;
  title: string;
  description: string;
  navigateTo?: string | false;
  navigateTitle?: string;
}
