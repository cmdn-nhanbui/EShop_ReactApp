import { clsx } from 'clsx';
import type { ButtonProps } from '../../core/constants/types';
import { THEME } from '../../core/constants/theme';

export const Button = ({ children, onClick, className, variant, color, rounded = false }: ButtonProps) => {
  const variantClass = variant ? THEME.BUTTON.VARIANT[variant] : '';
  const colorClass = color ? THEME.BUTTON.COLOR[color] : '';

  const buttonClasses = clsx(
    THEME.BUTTON.BASE,
    variantClass,
    colorClass,
    { [THEME.BUTTON.ROUNDED]: rounded },
    className,
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
