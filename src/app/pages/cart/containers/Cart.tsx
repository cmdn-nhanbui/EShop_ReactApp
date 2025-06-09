import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import type { CartItem as CartItemType } from '../../../core/constants/types';
import { CartItem } from '../../../shared/components/CartItem';
import type { RootState } from '../../../../redux/store';

import emptyBox from '@/assets/images/empty-box.png';
import { formatUSDCurrency } from '../../../core/helpers/currencyHelper';

const TAX = 24;
const DELIVERED_COST = 5;

const Cart = () => {
  const { data } = useSelector((state: RootState) => state.cart);

  const cartTotal = useMemo(() => {
    const subtotal = data?.reduce((prev: number, curr: CartItemType) => {
      const publicPrice = curr?.price * (1 - curr?.discountValue);
      return prev + publicPrice * curr?.quantity;
    }, 0);
    return parseFloat(subtotal.toFixed(2));
  }, [data]);

  const total = cartTotal + DELIVERED_COST + TAX;

  return (
    <>
      <div className='cart-container'>
        <div className='container '>
          <div className='flex flex-col flex-1'>
            <h3 className='cart-title'>Order Summary</h3>
            {!data?.length && (
              <div className='cart-empty-container'>
                <img className='image-cart-empty' src={emptyBox} alt='empty' />
                <h3 className='text-center'>No products in the cart.</h3>
              </div>
            )}
            <ul className='cart-list'>{data?.map((cartItem, index) => <CartItem key={index} {...cartItem} />)}</ul>
            <div className='cart-total flex flex-col'>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <span id='subtotal'>{formatUSDCurrency(cartTotal)}</span>
              </div>
              <div className='flex justify-between'>
                <p>Shipping estimate</p>
                <span>{formatUSDCurrency(DELIVERED_COST)}</span>
              </div>
              <div className='flex justify-between'>
                <p>Tax estimate</p>
                <span>{formatUSDCurrency(TAX)}</span>
              </div>
              <div className='flex justify-between font-bold'>
                <p>Order total</p>
                <span id='order-total'>{formatUSDCurrency(cartTotal === 0 ? 0 : total)}</span>
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
