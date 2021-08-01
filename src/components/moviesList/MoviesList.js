import React from "react";
import { Link, withRouter } from "react-router-dom";

const MovieList = ({ movies, match, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${match.url}/${movie.id}`,
              state: { from: location },
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
