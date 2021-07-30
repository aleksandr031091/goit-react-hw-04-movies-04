import HomePage from "../pages/HomePage";
// import movieDatailsPage from "../pages/MovieDetailsPage";
import moviePage from "../pages/MoviesPage";

export const routes = [
  { name: "home", path: "/", exact: true, component: HomePage },

  { name: "moviePage", path: "/moviePage", exact: true, component: moviePage },
];

//  {
//     name: "movieDatailsPage",
//     path: "/movieDatailsPage",
//     exact: true,
//     component: movieDatailsPage,
//   },
