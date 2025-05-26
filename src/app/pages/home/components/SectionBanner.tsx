import { BannerItem } from "../../../shared/components/BannerItem";
import newArriveBackground from "@/assets/images/home-image51.png";
import basicTShirtBackground from "@/assets/images/Fashion - home-image6 1.png";
import summerSaleBackground from "@/assets/images/Fashion - home-image7 1.png";

export const SectionBanner = () => {
  return (
    <section className="section section-banner">
      <div className="container">
        <ul className="banner-list row">
          <li className="banner-item col col-6 col-md-12 col-sm-12">
            <BannerItem
              title="New arrivalsare now in!"
              moreTitle="Show collection"
              imageUrl={newArriveBackground}
            />
          </li>
          <li className="banner-item col col-3 col-sm-6 col-md-6">
            <BannerItem
              title="Basic t-shirts $29,99"
              moreTitle="More Details"
              imageUrl={basicTShirtBackground}
            />
          </li>
          <li className="banner-item col col-3 col-sm-6 col-md-6">
            <BannerItem
              title="Sale this summer"
              moreTitle="View All"
              imageUrl={summerSaleBackground}
              badge="-50%"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
