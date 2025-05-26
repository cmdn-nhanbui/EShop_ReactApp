import { lazy } from "react";
import type { JSX, LazyExoticComponent } from "react";
import type { PageRoute } from "../../core/modules/custom-router-dom/router.interface";

const Home: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("./containers/Home")
);

const homeRoutes: PageRoute[] = [
  {
    path: "/",
    element: Home,
  },
];

export default homeRoutes;
