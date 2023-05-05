import React from 'react';
import { useLocation } from "react-router-dom";

export const Movie = () => {
  const location = useLocation();
  const {movie} = location.state;
  console.log(movie);
  
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.release_date}</p>
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img 
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
            alt={`${movie.title} Poster`} 
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <h3>Description</h3>
      {movie.overview}
    </div>
  )
}
