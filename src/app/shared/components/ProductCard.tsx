import { useDispatch } from 'react-redux';

import { Badge } from './Badge';
import { Icon } from './Icons';

import { useToast } from '../hooks/useToast';
import { addCartItem } from '../../../redux/actions/cartActions';
import { type AppDispatch } from '../../../redux/store';
import type { CartItem, ProductCardProps } from '../../core/constants/types';

export const ProductCard = ({ id, name, price, discountValue, thumbnail }: ProductCardProps) => {
  const publicPrice = price * (1 - discountValue);
  const discountPercent = discountValue * 100;

  const { showToast } = useToast();
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id,
      name,
      price,
      discountValue,
      thumbnail,
      quantity: 1,
    };
    dispatch(addCartItem(cartItem));

    showToast({ message: 'Add to cart successfully' });
  };

  return (
    <li className='product-item col col-3 col-sm-6 col-md-6'>
      <div className='product-item-container relative'>
        <img src={thumbnail} className='product-item-thumbnail' alt={name} />
        {!!discountValue && (
          <Badge color='DANGER' className='product-item-badge'>
            -{discountPercent}%
          </Badge>
        )}
        <div className='product-item-content'>
          <h4 className='product-name'>{name}</h4>
          <div className='product-item-price flex items-center justify-between'>
            <span className='main-price text-red'>${publicPrice.toFixed(2)}</span>
            {!!discountValue && <span className='discount-price'>${price.toFixed(2)}</span>}
          </div>
        </div>
        <button onClick={handleAddToCart} className='button-cart' data-id='${id}'>
          <Icon icon='cart' color='black' />
        </button>
      </div>
    </li>
  );
};
