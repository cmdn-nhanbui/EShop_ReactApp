import clsx from 'clsx'
import type { BadgeProps } from '../../../constants/types'

export const Badge = ({ children, danger, className }: BadgeProps) => {
  const badgeClasses = clsx(
    'badge',
    {
      'badge-danger': danger,
    },
    className,
  )

  return <div className={badgeClasses}>{children}</div>
}
