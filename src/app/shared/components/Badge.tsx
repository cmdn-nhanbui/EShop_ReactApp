import clsx from 'clsx';
import type { BadgeProps } from '../../core/constants/types';
import { THEME } from '../../core/constants/theme';

export const Badge = ({ children, className, color = 'DANGER' }: BadgeProps) => {
  const colorClass = color ? THEME.BADGE.COLOR[color] : '';
  const badgeClasses = clsx('badge', colorClass, className);

  return <div className={badgeClasses}>{children}</div>;
};
