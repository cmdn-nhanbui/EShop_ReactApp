import { lazy } from 'react'
import type { JSX, LazyExoticComponent } from 'react'
import type { PageRoute } from '../../core/modules/custom-router-dom/router.interface'
import { ROUTES } from '../../../constants/routes'

const Home: LazyExoticComponent<() => JSX.Element> = lazy(() => import('./containers/Home'))

const homeRoutes: PageRoute[] = [
  {
    path: ROUTES.root,
    element: Home,
  },
]

export default homeRoutes
