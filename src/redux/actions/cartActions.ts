import { ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_QUANTITY_CART_ITEM } from '../types';
import type { CartItem } from '../../app/core/constants/types';

export const addCartItem = (cartItem: CartItem) => ({ type: ADD_CART_ITEM, payload: cartItem });

export const removeCartItem = (id: number) => ({ type: REMOVE_CART_ITEM, payload: id });

export const updateCartQuantity = (id: number, quantity: number) => ({
  type: UPDATE_QUANTITY_CART_ITEM,
  payload: {
    id,
    quantity,
  },
});
