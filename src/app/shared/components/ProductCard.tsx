import { Badge } from "./Badge";
import { CartIcon } from "./Icons";

type ProductCardProps = {
  name: string;
  price: number;
  discountValue: number;
  thumbnail: string;
};

export const ProductCard = ({
  name,
  price,
  discountValue,
  thumbnail,
}: ProductCardProps) => {
  const publicPrice = price * (1 - discountValue);
  const discountPercent = discountValue * 100;

  return (
    <li className="product-item col col-3 col-sm-6 col-md-6">
      <div className="product-item-container relative">
        <img src={thumbnail} className="product-item-thumbnail" alt={name} />
        {!!discountValue && (
          <Badge danger className="product-item-badge">
            -{discountPercent}%
          </Badge>
        )}
        <div className="product-item-content">
          <h4 className="product-name">{name}</h4>
          <div className="product-item-price flex items-center justify-between">
            <span className="main-price text-red">
              ${publicPrice.toFixed(2)}
            </span>
            {!!discountValue && (
              <span className="discount-price">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
        <div className="button-cart" data-id="${id}">
          <CartIcon color="black" />
        </div>
      </div>
    </li>
  );
};
