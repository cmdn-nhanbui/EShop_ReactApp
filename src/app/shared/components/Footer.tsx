import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YoutubeIcon,
} from "./Icons";
import logoImage from "@/assets/images/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-menu-container">
        <div className="row col-sm">
          {/* <!-- left --> */}
          <div className="col col-6">
            <img src={logoImage} alt="E-Shop" />
            <p className="footer-desc">
              House My Brand designs clothing for the young, the old &everyone
              in between - but most importantly, for the fashionable
            </p>
            <div className="footer-media">
              <ul className="media-list flex">
                <li className="media-item">
                  <a href="https://facebook.com">
                    <FacebookIcon className="media-icon" />
                  </a>
                </li>
                <li className="media-item">
                  <a href="https://instagram.com">
                    <InstagramIcon className="media-icon" />
                  </a>
                </li>
                <li className="media-item">
                  <a href="https://linkedin.com">
                    <LinkedInIcon className="media-icon" />
                  </a>
                </li>
                <li className="media-item">
                  <a href="https://youtube.com">
                    <YoutubeIcon className="media-icon" />
                  </a>
                </li>
                <li className="media-item">
                  <a href="https://instagram.com">
                    <TikTokIcon className="media-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- right --> */}
          <div className="footer-menus col col-6 flex col-md-12">
            <div className="footer-menu flex-1">
              <p className="footer-menu-title">Shopping Online</p>
              <ul className="shipping-list">
                <li className="shopping-item">
                  <a href="#">Order Status</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Shipping and Delivery</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Payment Options</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Returns</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-menu flex-1">
              <p className="footer-menu-title">Information</p>
              <ul className="shipping-list">
                <li className="shopping-item">
                  <a href="#">Gift Cards</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Find a store</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Newsletter</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Become a member</a>
                </li>
                <li className="shopping-item">
                  <a href="#">Site feedback</a>
                </li>
              </ul>
            </div>

            <div className="footer-menu flex-1">
              <p className="footer-menu-title">Contact</p>
              <ul className="shipping-list">
                <li className="shopping-item">
                  <a href="mailto:store@uikit.com">store@uikit.com</a>
                </li>
                <li className="shopping-item">
                  <a href="tel:+1 131 138 138">Hotline: +1 131 138 138</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
