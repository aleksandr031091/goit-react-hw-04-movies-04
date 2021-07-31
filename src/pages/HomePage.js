import React, { Component } from "react";

import { searchTrandMouve } from "../services/muvieApi";

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
        <h2>HomePage</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quia
          quisquam. Molestiae eveniet, facere beatae saepe voluptatibus velit
          nisi, nesciunt nemo laudantium quas consectetur earum ipsum voluptate
          quam cumque dolores.
        </p>
      </>
    );
  }
}

export default HomePage;
