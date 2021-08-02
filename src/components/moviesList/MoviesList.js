import React from "react";
import { Link, withRouter } from "react-router-dom";
import css from "./Movies.list.module.css";

const MovieList = ({ movies, match, location, query }) => {
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li className={css.movieListItem} key={movie.id}>
          <Link
            className={css.movieListItemLink}
            to={{
              pathname: `${match.url}/${movie.id}`,
              state: { from: location.pathname, query },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MovieList);
