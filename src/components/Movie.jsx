import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import "./movie.css";

class movie extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={6} md={3} lg={2}>
        <img
          src={this.props.movie.Poster}
          alt="movie"
          class="img-fluid image mb-2"
          onClick={() => {
            this.setState({ selected: !this.state.selected });
          }}
        />
        {this.state.selected && <CommentArea id={this.props.movie.imdbID} />}
        <Link to={`/movie-details/` + this.props.movie.imdbID}>
          <button>SEE DETAILS</button>
        </Link>
      </Col>
    );
  }
}

export default movie;
