import { lazy } from "react";

export const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },
  {
    name: "movieDatailsPage",
    path: "/movieDatailsPage",
    exact: true,
    component: lazy(() => import("../pages/MovieDetailsPage")),
  },
  {
    name: "moviePage",
    path: "/moviePage",
    exact: true,
    component: lazy(() => import("../pages/MoviesPage")),
  },
];
