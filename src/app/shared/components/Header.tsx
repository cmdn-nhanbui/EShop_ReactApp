import { Link } from 'react-router-dom';

import { ROUTES } from '../../core/constants/routes';
import { Icon } from './Icons';

export const Header = ({}) => {
  return (
    <header className='header'>
      <div className='container flex justify-between header-container'>
        <div className='logo-container'>
          <Link to={ROUTES.ROOT}>
            <h1>
              <div className='logo-image'></div>
            </h1>
          </Link>
        </div>
        <nav className='flex items-center'>
          <ul className='nav-container flex justify-between'>
            <li className='nav-item'>
              <a href='/men'>Men</a>
            </li>
            <li className='nav-item'>
              <a href='/women'>Women</a>
            </li>
            <li className='nav-item'>
              <a href='/kids'>Kids</a>
            </li>
          </ul>
        </nav>

        <div className='options-container flex items-center'>
          <ul className='option-list flex items-center'>
            <li>
              <button className='flex items-center justify-center'>
                <Icon icon='search' className='option-icon' color='inherit' />
              </button>
            </li>
            <li>
              <Link to={ROUTES.CART}>
                <button className='flex items-center justify-center'>
                  <Icon icon='cart' className='option-icon' color='inherit' width={24} height={24} />
                </button>
              </Link>
            </li>
            <li>
              <button className='flex items-center justify-center'>
                <Icon icon='user' className='option-icon' color='inherit' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
