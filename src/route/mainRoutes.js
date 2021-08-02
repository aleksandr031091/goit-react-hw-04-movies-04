import { lazy } from "react";

export const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },

  {
    name: "moviePage",
    path: "/movie",
    exact: true,
    component: lazy(() => import("../pages/MoviesPage")),
  },
];
