import React from "react";
import homeRoutes from "./home/home.routes";
import type { PageRoute } from "../core/modules/custom-router-dom/router.interface";

const Page = React.lazy(() => import("./Page"));

const pageRoutes: PageRoute[] = [
  {
    path: "/",
    element: Page,
    children: [...homeRoutes],
  },
];

export default pageRoutes;
