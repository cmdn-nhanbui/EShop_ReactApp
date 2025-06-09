import React from 'react';

import type { PageRoute } from '../core/modules/custom-router-dom/router.interface';
import homeRoutes from './home/home.routes';
import cartRoutes from './cart/cart.routes';
import errorRoutes from './error/error.routes';

const Page = React.lazy(() => import('./Page'));
const SecondaryPage = React.lazy(() => import('./SecondaryPage'));

const pageRoutes: PageRoute[] = [
  {
    path: '/',
    element: Page,
    children: [...homeRoutes],
  },
  {
    path: '/',
    element: SecondaryPage,
    children: [...cartRoutes, ...errorRoutes],
  },
];

export default pageRoutes;
