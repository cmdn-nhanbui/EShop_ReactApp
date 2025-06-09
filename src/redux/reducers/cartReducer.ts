import { getLS, KEYS, setLS } from '../../app/core/helpers/storageHelper';

import type { CartItem } from '../../app/core/constants/types';
import { ADD_CART_ITEM, UPDATE_QUANTITY_CART_ITEM, REMOVE_CART_ITEM } from '../types';

interface CartState {
  data: CartItem[];
}

const saveCartToLocalStorage = (cartData: CartItem[]): void => {
  const cartJSON = JSON.stringify(cartData);
  setLS(KEYS.CART, cartJSON);
};

const cart = getLS(KEYS.CART);
const cartData = JSON.parse(String(cart));

const initialState: CartState = {
  data: Array.isArray(cartData) ? cartData : [],
};

const cartReducer = (state = initialState, action: any): CartState => {
  const newCartData = [...state.data];
  const cartItem = action.payload;

  switch (action.type) {
    case ADD_CART_ITEM:
      const isCartExisted = newCartData?.find((item) => item?.id === cartItem?.id);

      if (!isCartExisted) {
        newCartData.push(cartItem);
      } else {
        isCartExisted.quantity += 1;
      }

      saveCartToLocalStorage(newCartData);
      return {
        ...state,
        data: newCartData,
      };

    case UPDATE_QUANTITY_CART_ITEM:
      const updateItem = newCartData?.find((cartItem) => cartItem?.id === action?.payload?.id);

      if (updateItem) {
        updateItem.quantity = action?.payload?.quantity;
      }

      saveCartToLocalStorage(newCartData);
      return { ...state, data: newCartData };
    case REMOVE_CART_ITEM:
      const id = action.payload;
      const removedArray = state.data?.filter((item) => item?.id !== id);

      saveCartToLocalStorage(removedArray);
      return { ...state, data: removedArray };
    default:
      return state;
  }
};

export default cartReducer;
