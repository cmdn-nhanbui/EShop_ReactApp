import { lazy } from 'react'
import type { JSX, LazyExoticComponent } from 'react'
import type { PageRoute } from '../../core/modules/custom-router-dom/router.interface'

const Cart: LazyExoticComponent<() => JSX.Element> = lazy(() => import('./containers/Cart'))

const cartRoutes: PageRoute[] = [
  {
    path: '/cart',
    element: Cart,
  },
]

export default cartRoutes
