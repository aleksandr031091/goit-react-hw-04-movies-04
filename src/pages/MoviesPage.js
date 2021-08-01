import React, { Component } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import MoviesList from "../components/moviesList/MoviesList";
import { searchMovies } from "../services/muvieApi";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  handleSubmit = (query) => {
    searchMovies(query).then(({ data }) =>
      this.setState({ movies: data.results })
    );

    // console.log(query);
  };

  render() {
    console.log(this.state.movies);
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
