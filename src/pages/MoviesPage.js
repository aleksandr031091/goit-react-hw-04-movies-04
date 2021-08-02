import React, { Component } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import MoviesList from "../components/moviesList/MoviesList";
import { searchMovies } from "../services/muvieApi";
import queryString from "query-string";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  componentDidMount = () => {
    const queryParams = queryString.parse(this.props.location.search);
    const { query } = queryParams;
    if (query) {
      searchMovies(query).then(({ data }) => {
        this.setState({ movies: data.results, searchQuery: query });
      });
    }
  };

  handleSubmit = (query) => {
    if (query) {
      searchMovies(query).then(({ data }) =>
        this.setState({ movies: data.results, searchQuery: query })
      );
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });
    }
  };

  render() {
    const { movies, searchQuery } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <MoviesList movies={movies} query={searchQuery} />
      </>
    );
  }
}

export default MoviesPage;
