import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesList = movies.map((movie) => (
    <ul key={movie.title}>
      Title: {movie.title}
      <p>Time: {movie.time} minutes</p>
      <p>Genre: {(movie.genres).map((genre) => {
        return (
          <li key={genre}>{genre}</li>
        )
      })}</p>
    </ul>
  ))

  return <div><h1>Movies Page</h1>{moviesList}</div>;
}

export default Movies;
