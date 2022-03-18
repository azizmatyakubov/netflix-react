import React, { Component } from "react";
import Movie from "./Movie.jsx";
import { Row } from "react-bootstrap";
import "./movieRow.css";

export default class MovieRow extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=a0d093ea&s=" + this.props.movie
    );

    let data = await response.json();
    this.setState({ movies: data.Search });
    console.log(data.Search);
  };

  render() {
    return (
      <>
        <h4 className="my-3 mx-5" style={{ color: "white" }}>
          {this.props.movie}
        </h4>
        <Row className="movieRow">
          {this.state.movies.map((movie, i) => (
            <Movie movie={movie} key={i} />
          ))}
        </Row>
      </>
    );
  }
}
