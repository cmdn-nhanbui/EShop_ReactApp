import type { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = {
  primary?: boolean;
  outlined?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  children,
  primary,
  outlined,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={clsx("button", { primary, outlined })}>
      {children}
    </button>
  );
};
