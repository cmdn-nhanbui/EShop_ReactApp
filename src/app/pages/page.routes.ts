import React from 'react'
import homeRoutes from './home/home.routes'
import type { PageRoute } from '../core/modules/custom-router-dom/router.interface'
import cartRoutes from './cart/cart.routes'
import notFoundRoutes from './notFound/notFound.routes'

const Page = React.lazy(() => import('./Page'))

const pageRoutes: PageRoute[] = [
  {
    path: '/',
    element: Page,
    children: [...homeRoutes, ...cartRoutes, ...notFoundRoutes],
  },
]

export default pageRoutes
