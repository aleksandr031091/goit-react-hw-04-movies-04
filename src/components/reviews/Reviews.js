import React, { Component } from "react";
import { searchMovieReviews } from "../../services/muvieApi";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    searchMovieReviews(this.props.match.params.id).then((review) =>
      this.setState({ reviews: review.data.results })
    );
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </div>
    );
  }
}

export default Reviews;
