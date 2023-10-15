import React from 'react';
import '../css/Movie.css';
import { useLocation } from "react-router-dom";

export const Movie = () => {
  const location = useLocation();
  const {movie} = location.state;
  
  return (
    <div className="movie">
      <div className="container">
        <h1 className="title">{movie.title}</h1>
        <div className="release-date">{movie.release_date}</div>
        <div className="poster-wrapper">
          {movie.backdrop_path ? (
            <img 
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} 
              alt={`${movie.title} Poster`} 
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>
        <h3>Description</h3>
        <div className="description">
          {movie.overview}
        </div>
      </div>
    </div>
  )
}
