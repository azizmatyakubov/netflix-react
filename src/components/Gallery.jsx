import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MovieRow from "./MovieRow";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Gallery extends Component {
  render() {
    return (
      <>
        <Container fluid className="px-5">
          <MovieRow movie="harry%20potter" />
          <MovieRow movie="Sherlock" />
          <MovieRow movie="Stranger%20Things" />
        </Container>
      </>
    );
  }
}
