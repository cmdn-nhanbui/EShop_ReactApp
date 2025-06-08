import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { ROUTES } from '../../core/constants/routes';
import { Icon } from './Icons';
import type { HeaderProps } from '../../core/constants/types';

export const Header = ({ transparent = false }: HeaderProps) => {
  const classes = clsx('header', {
    'bg-transparent': transparent,
  });
  return (
    <header className={classes}>
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
                <Icon icon='search' className='option-icon' color='inherit' width={20} height={20} />
              </button>
            </li>
            <li>
              <Link to={ROUTES.CART}>
                <button className='flex items-center justify-center'>
                  <Icon icon='cart' className='option-icon' color='inherit' width={20} height={20} />
                </button>
              </Link>
            </li>
            <li>
              <button className='flex items-center justify-center'>
                <Icon icon='user' className='option-icon' color='inherit' width={20} height={20} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
