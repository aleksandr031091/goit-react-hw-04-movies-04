import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchTrandMouve, posterimgpath } from "../services/muvieApi";

import css from "../style/HomePage.module.css";

class HomePage extends Component {
  state = {
    trandingMovie: [],
  };

  componentDidMount() {
    searchTrandMouve().then(({ data }) =>
      this.setState({ trandingMovie: data.results })
    );
  }

  render() {
    return (
      <>
        <h2 className={css.title}>Trending today</h2>
        <ul className={css.movieList}>
          {this.state.trandingMovie.map((movie) => (
            <li key={movie.id} className={css.movieListItem}>
              <img
                className={css.posterImg}
                src={posterimgpath + movie.poster_path}
                alt={movie.title}
              />
              <Link
                className={css.movieListItemLink}
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { from: this.props.location.pathname },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
