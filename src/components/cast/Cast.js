import React, { Component } from "react";
import { searchMovieCredits } from "../../services/muvieApi";
import { profilepath } from "../../services/muvieApi";

class Cast extends Component {
  state = {
    credits: [],
  };

  componentDidMount() {
    searchMovieCredits(this.props.match.params.id).then((credit) =>
      this.setState({
        credits: credit.data.cast,
      })
    );
  }

  render() {
    const { credits } = this.state;

    return (
      <ul>
        {credits &&
          credits.map((credit) => (
            <li key={credit.credit_id}>
              {credit.profile_path && (
                <img
                  src={profilepath + credit.profile_path}
                  alt={credit.name}
                />
              )}
              <p>{credit.name}</p>
              <p>Character: {credit.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Cast;
