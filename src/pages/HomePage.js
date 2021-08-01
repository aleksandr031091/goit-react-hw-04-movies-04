import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchTrandMouve } from "../services/muvieApi";
import { routes } from "../route/mainRoutes";

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
    console.log(this.state);
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.trandingMovie.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/moviePage/${movie.id}`,
                  state: { from: this.props.location },
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
