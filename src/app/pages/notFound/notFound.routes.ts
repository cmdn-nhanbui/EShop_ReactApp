import { lazy, type JSX, type LazyExoticComponent } from "react";
import type { PageRoute } from "../../core/modules/custom-router-dom/router.interface";

const NotFoundSection: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("./containers/NotfoundSection")
);

const notFoundRoutes: PageRoute[] = [
  {
    path: "/404",
    element: NotFoundSection,
  },
];

export default notFoundRoutes;
