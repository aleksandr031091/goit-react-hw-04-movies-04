import HomePage from "../pages/HomePage";
import moviePage from "../pages/MoviesPage";

export const routes = [
  { name: "home", path: "/", exact: true, component: HomePage },

  { name: "movie", path: "/movie", exact: true, component: moviePage },
];
