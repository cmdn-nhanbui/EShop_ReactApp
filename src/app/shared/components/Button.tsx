import { clsx } from 'clsx'
import type { ButtonProps } from '../../../constants/types'

export const Button = ({ children, primary, outlined, onClick, rounded, className }: ButtonProps) => {
  const buttonClass = clsx(
    'button',
    {
      'button-primary': primary,
      'button-outlined': outlined,
      'rounded-lg': rounded,
    },
    className,
  )

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  )
}
