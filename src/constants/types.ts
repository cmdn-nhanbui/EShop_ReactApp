import type { ReactNode } from 'react'
import type React from 'react'

export interface Product {
  id: number
  name: string
  price: number
  thumbnail: string
  discountValue: number
}

export interface StorageProps {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  cartItems: CartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
}

export interface ButtonProps {
  primary?: boolean
  outlined?: boolean
  rounded?: boolean
  children: ReactNode
  className?: string
  onClick?: () => void
}

export interface ChooseItemProps {
  icon: ReactNode
  title: string
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface ProductCardProps extends Product {}

export interface Toast {
  id: string
  message: string
  duration?: number
  type?: 'success' | 'error'
}

export interface ToastContainerProps {
  toasts: Toast[]
}

export type ShowToastOptions = Omit<Toast, 'id'>

export interface BadgeProps {
  children: ReactNode
  danger?: boolean
  className?: string
}

export interface CounterProps {
  value: number
  onChange?: (value: number) => void
  min?: number
  max?: number
}
