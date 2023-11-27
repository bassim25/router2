import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const {id} = useParams()
  const foundmovie= movie.find((el)=> id === +id)
  return (
    <div>
      <h1>{foundmovie.title}</h1>
      <p>{foundmovie.description}</p>
      <iframe
        title="trailer"
        width="560"
        height="315"
        src={foundmovie.trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;

