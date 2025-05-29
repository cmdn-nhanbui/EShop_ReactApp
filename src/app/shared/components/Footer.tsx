import logoImage from '@/assets/images/Logo.png';
import { Icon } from './Icons';

const footerMenus = [
  {
    title: 'Shopping Online',
    children: ['Order status', 'Shipping and Delivery', 'Payment Options', 'Returns', 'Contact Us'],
  },
  {
    title: 'Information',
    children: ['Gift Cards', 'Find a store', 'Newsletter', 'Become a member', 'Site feedback'],
  },
  {
    title: 'Contact',
    children: ['store@uikit.com', 'Hotline: +1 131 138 138'],
  },
];

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-menu-container'>
        <div className='row col-sm'>
          {/* <!-- left --> */}
          <div className='col col-6'>
            <img src={logoImage} alt='E-Shop' />
            <p className='footer-desc'>
              House My Brand designs clothing for the young, the old &everyone in between - but most importantly, for
              the fashionable
            </p>
            <div className='footer-media'>
              <ul className='media-list flex'>
                <li className='media-item'>
                  <a href='https://facebook.com'>
                    {/* <FacebookIcon color='white' className='media-icon' /> */}
                    <Icon icon='fb' />
                  </a>
                </li>
                <li className='media-item'>
                  <a href='https://instagram.com'>
                    <Icon icon='instagram' className='media-icon' />
                  </a>
                </li>
                <li className='media-item'>
                  <a href='https://linkedin.com'>
                    <Icon icon='linked-in' className='media-icon' />
                  </a>
                </li>
                <li className='media-item'>
                  <a href='https://youtube.com'>
                    <Icon icon='youtube' className='media-icon' />
                  </a>
                </li>
                <li className='media-item'>
                  <a href='https://tiktok.com'>
                    <Icon icon='tiktok' className='media-icon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- right --> */}
          <div className='footer-menus col col-6 flex col-md-12'>
            {footerMenus?.map((item, index) => (
              <div key={index} className='footer-menu flex-1'>
                <p className='footer-menu-title'>{item.title}</p>
                <ul className='shipping-list'>
                  {item?.children?.map((childItem, index) => (
                    <li key={index} className='shopping-item'>
                      <a href='#'>{childItem}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
