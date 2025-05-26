import clsx from "clsx";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  danger?: boolean;
  className?: string;
};

export const Badge = ({ children, danger, className }: BadgeProps) => {
  const badgeClasses = clsx(
    "badge",
    {
      "badge-danger": danger,
    },
    className
  );
  return <div className={badgeClasses}>{children}</div>;
};
