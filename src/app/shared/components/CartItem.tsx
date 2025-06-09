import { useDispatch } from 'react-redux';

import type { CartItem as CartItemType } from '../../core/constants/types';
import { Counter } from './Counter';
import { Icon } from './Icons';

import { useToast } from '../hooks/useToast';
import { type AppDispatch } from '../../../redux/store';
import { removeCartItem, updateCartQuantity } from '../../../redux/actions/cartActions';

export const CartItem = ({ name, quantity, discountValue, price, id, thumbnail }: CartItemType) => {
  const { showToast } = useToast();

  const publicPrice = price * (1 - discountValue);
  const hasDiscount = discountValue !== 0;
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeQuantity = (value: number) => {
    if (value === 0) {
      return handleDeleteCartItem();
    }

    dispatch(updateCartQuantity(id, value));
  };

  const handleDeleteCartItem = () => {
    const confirmDelete = window.confirm('Do you want remove this product ?');

    if (confirmDelete) {
      dispatch(removeCartItem(id));
      showToast({ message: 'Delete product successfully' });
    }
  };

  return (
    <li className='cart-item' data-id={id}>
      <img className='product-image' src={thumbnail} alt={name}></img>

      <div className='product-info'>
        <div className='product-name'>{name}</div>
        <Counter onChange={handleChangeQuantity} value={quantity} min={0} />
      </div>

      <div className='product-price'>
        <div className='current-price'>${publicPrice.toFixed(2)}</div>
        {hasDiscount && <div className='old-price'>${price}</div>}
      </div>

      <button onClick={handleDeleteCartItem} className='button-remove' data-id='${id}'>
        <Icon icon='trash-can' />
      </button>
    </li>
  );
};
