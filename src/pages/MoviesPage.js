import React, { Component } from "react";
import SearchBar from "../components/searchBar/SearchBar";

class MoviesPage extends Component {
  state = {
    movie: "",
  };

  onChangeQuery = (query) => {
    // this.setState({ movie: query });
    console.log(query);
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <button>Go back</button>
        <h2>MoviesPage</h2>
      </>
    );
  }
}

export default MoviesPage;
