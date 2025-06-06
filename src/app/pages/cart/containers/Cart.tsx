import { useMemo } from 'react';

import emptyBox from '@/assets/images/empty-box.png';

import type { CartItem as CartItemType } from '../../../core/constants/types';
import { CartItem } from '../../../shared/components/CartItem';
import { useStorage } from '../../../shared/hooks/useStorage';

const Cart = () => {
  const { cartItems } = useStorage();

  const cartTotal = useMemo(() => {
    const subtotal = cartItems?.reduce((prev: number, curr: CartItemType) => {
      const publicPrice = curr?.price * (1 - curr?.discountValue);
      return prev + publicPrice * curr?.quantity;
    }, 0);
    return parseFloat(subtotal.toFixed(2));
  }, [cartItems]);

  const total = cartTotal + 5 + 24;

  return (
    <>
      <div className='cart-header'></div>
      <div className='cart-container'>
        <div className='container '>
          <div className='flex flex-col flex-1'>
            <h3 className='cart-title'>Order Summary</h3>
            {!cartItems?.length && (
              <div className='cart-empty-container'>
                <img className='image-cart-empty' src={emptyBox} alt='empty' />
                <h3 className='text-center'>No products in the cart.</h3>
              </div>
            )}
            <ul id='cart-list' className='cart-list'>
              {cartItems?.map((cartItem, index) => <CartItem key={index} {...cartItem} />)}
            </ul>
            <div className='cart-total flex flex-col'>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <span id='subtotal'>${cartTotal}</span>
              </div>
              <div className='flex justify-between'>
                <p>Shipping estimate</p>
                <span>$5.00</span>
              </div>
              <div className='flex justify-between'>
                <p>Tax estimate</p>
                <span>$24.00</span>
              </div>
              <div className='flex justify-between font-bold'>
                <p>Order total</p>
                <span id='order-total'>${cartTotal === 0 ? 0 : total}</span>
              </div>

              <button className='button-confirm'>Confirm order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
