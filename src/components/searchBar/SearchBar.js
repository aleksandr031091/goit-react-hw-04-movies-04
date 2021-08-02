import React, { Component } from "react";
import css from "./SearchBar.module.css";
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
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            Search
          </button>
          <input
            className={css.input}
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
