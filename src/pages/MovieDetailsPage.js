import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { searchMouvesDetails } from "../services/muvieApi";
import { posterimgpath } from "../services/muvieApi";
import Cast from "../components/cast/Cast";
import Reviews from "../components/reviews/Reviews";
import css from "../style/MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: {
      genres: [],
    },
    from: "",
    query: "",
  };

  componentDidMount() {
    searchMouvesDetails(this.props.match.params.id).then((movie) =>
      this.setState({
        movie: movie.data,
        from: this.props.location.state?.from,
        query: this.props.location.state?.query,
      })
    );
  }

  goBack = () => {
    this.state.query
      ? this.props.history.push({
          pathname: this.state.from,
          search: `query=${this.state.query}`,
        })
      : this.props.history.push(this.state.from);
  };

  render() {
    const { title, poster_path, vote_average, overview, release_date, genres } =
      this.state.movie;

    let releaseYear = "";
    if (!!release_date) {
      releaseYear = release_date.substring(0, 4);
    }

    return (
      <div className={css.movieDetailsContainer}>
        <button className={css.button} type="button" onClick={this.goBack}>
          Go back
        </button>
        <div>
          <div>
            {!!poster_path && (
              <img src={posterimgpath + poster_path} alt={title} />
            )}
          </div>
          <div>
            <h1>
              {title} ({releaseYear})
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>genres</h4>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <p>Additional information</p>
        <ul>
          <NavLink
            className={css.navLink}
            activeClassName={css.activeNavLink}
            to={{ pathname: `${this.props.match.url}/Cast` }}
          >
            Cast
          </NavLink>
          <NavLink
            className={css.navLink}
            activeClassName={css.activeNavLink}
            to={{ pathname: `${this.props.match.url}/reviews` }}
          >
            Reviews
          </NavLink>

          <Switch>
            <Route path={`${this.props.match.path}/cast`} component={Cast} />
            <Route
              path={`${this.props.match.path}/reviews`}
              component={Reviews}
            />
          </Switch>
        </ul>
      </div>
    );
  }
}

export default MovieDetailsPage;
