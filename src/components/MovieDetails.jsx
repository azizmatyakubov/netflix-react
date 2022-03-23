import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const MovieDetails = () => {
  const param = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchApiById();
  }, []);

  const fetchApiById = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=a0d093ea&i=" + param.id
    );
    if (response.ok) {
      let data = await response.json();
      setMovie(data);
      console.log(movie);
    } else {
      console.log("error");
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card style={{ width: "18rem" }} className="d-flex">
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Actors: {movie.Actors}</ListGroupItem>
            <ListGroupItem>Awards: {movie.Awards}</ListGroupItem>
            <ListGroupItem>BoxOffice: {movie.BoxOffice}</ListGroupItem>
            <ListGroupItem>Country: {movie.Country}</ListGroupItem>
            <ListGroupItem>Director: {movie.Director}</ListGroupItem>
            <ListGroupItem>Genre: {movie.Genre}</ListGroupItem>
            <ListGroupItem>Language: {movie.Language}</ListGroupItem>
            <ListGroupItem>Year: {movie.Year}</ListGroupItem>
            <ListGroupItem>ID: {movie.imdbID}</ListGroupItem>
            <ListGroupItem>Rating: {movie.imdbRating}</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
