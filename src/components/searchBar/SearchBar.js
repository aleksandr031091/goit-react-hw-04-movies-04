import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: e.currentTarget });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button></button>
          <input
            type="text"
            value={this.state.query}
            autocomplete="off"
            autofocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
