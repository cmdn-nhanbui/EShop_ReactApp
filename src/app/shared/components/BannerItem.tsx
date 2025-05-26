import { Badge } from "./Badge";
import { Button } from "./Button";

type BannerItemProps = {
  title: string;
  imageUrl: string;
  navigate?: string;
  moreTitle?: string;
  badge?: string;
};

export const BannerItem = ({
  title,
  imageUrl,
  navigate = "/",
  moreTitle,
  badge,
}: BannerItemProps) => {
  return (
    <div
      style={{
        ["--bg-image" as string]: `url(${imageUrl})`,
      }}
      className="banner-item-image relative"
    >
      <div className="banner-item-overlay"></div>
      <div className="banner-item-content flex flex-col">
        {badge && <Badge danger>{badge}</Badge>}
        <h3 className="banner-item-title">{title}</h3>
        {moreTitle && (
          <a href={navigate}>
            <Button rounded>{moreTitle}</Button>
          </a>
        )}
      </div>
    </div>
  );
};
