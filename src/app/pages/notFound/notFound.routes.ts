import { lazy, type JSX, type LazyExoticComponent } from 'react'
import type { PageRoute } from '../../core/modules/custom-router-dom/router.interface'
import { ROUTES } from '../../../constants/routes'

const NotFound: LazyExoticComponent<() => JSX.Element> = lazy(() => import('./containers/NotFound'))

const notFoundRoutes: PageRoute[] = [
  {
    path: ROUTES.notfound,
    element: NotFound,
  },
]

export default notFoundRoutes
