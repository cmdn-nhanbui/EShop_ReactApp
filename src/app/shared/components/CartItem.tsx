import type { CartItem as CartItemType } from '../../../constants/types'
import { useStorage } from '../hooks/useStorage'
import { Counter } from './Counter'
import { TrashCanIcon } from './Icons'

export const CartItem = ({ name, quantity, discountValue, price, id, thumbnail }: CartItemType) => {
  const publicPrice = price * (1 - discountValue)
  const hasDiscount = discountValue !== 0
  const { setCartItems } = useStorage()

  const handleChangeQuantity = (value: number) => {
    if (value === 0) {
      return handleDeleteCartItem()
    }

    setCartItems((prev: CartItemType[]) => {
      const newState = [...prev]
      const cartItem = newState?.find((item: CartItemType) => item?.id === id)

      if (cartItem) {
        cartItem.quantity = value
      }

      return newState
    })
  }

  const handleDeleteCartItem = () => {
    const confirmDelete = window.confirm('Do you want remove this product ?')

    if (confirmDelete) {
      setCartItems((prev: CartItemType[]) => {
        return [...prev]?.filter((item) => item?.id !== id)
      })
    }
  }

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
        <TrashCanIcon color='black' />
      </button>
    </li>
  )
}
