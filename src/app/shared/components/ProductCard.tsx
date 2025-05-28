import type { CartItem, ProductCardProps } from '../../../constants/types'
import { useToast } from '../contexts/toast.context'
import { useStorage } from '../hooks/useStorage'
import { Badge } from './Badge'
import { Icon } from './Icons'

export const ProductCard = ({ id, name, price, discountValue, thumbnail }: ProductCardProps) => {
  const publicPrice = price * (1 - discountValue)
  const discountPercent = discountValue * 100

  const { products, setCartItems } = useStorage()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    showToast({ message: 'Add to cart successfully' })

    setCartItems((prev: CartItem[]) => {
      const newState: CartItem[] = [...prev]
      const isExistedInCart: CartItem | undefined = newState?.find((item) => item.id === id)

      if (isExistedInCart) {
        isExistedInCart.quantity++
        return newState
      }

      const product = products?.find((product) => product.id === id)

      if (product) {
        const newCartItem: CartItem = {
          ...product,
          quantity: 1,
        }
        newState.push(newCartItem)
      }
      return newState
    })
  }

  return (
    <li className='product-item col col-3 col-sm-6 col-md-6'>
      <div className='product-item-container relative'>
        <img src={thumbnail} className='product-item-thumbnail' alt={name} />
        {!!discountValue && (
          <Badge danger className='product-item-badge'>
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
  )
}
