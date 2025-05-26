import type { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = {
  primary?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  primary,
  outlined,
  onClick,
  rounded,
  className,
}: ButtonProps) => {
  const buttonClass = clsx(
    "button",
    {
      "button-primary": primary,
      "button-outlined": outlined,
      "rounded-lg": rounded,
    },
    className
  );
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};
