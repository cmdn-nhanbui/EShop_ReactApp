import type { ReactNode } from "react";

export type ChooseItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ChooseItem = ({ icon, title, description }: ChooseItemProps) => {
  return (
    <li className="col col-3 col-sm-12 row-sm col-md-6 col-md items-center-md text-center-md flex-md">
      <div className="choosing-icon-container flex items-center justify-center">
        {icon}
      </div>
      <div className="choosing-content">
        <h4 className="choosing-item-title">{title}</h4>
        <p className="choosing-item-desc">{description}</p>
      </div>
    </li>
  );
};
