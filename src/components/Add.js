import React, {useState} from 'react';
import {ResultCard} from './ResultCard';
import '../css/Add.css';

export const Add = () => {
  const [query, setQuery] = useState("");
  const [solutions, setSolutions] = useState([]);


  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then(res => res.json())
      .then((data) => {
        if(!data.errors) {
          setSolutions(data.results);
        } else {
          setSolutions([]);
        }
        console.log(query);
        console.log(solutions.typeof);
        console.log(solutions);
        console.log(data);
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder="Search for a movie"
              value ={query}
              onChange={onChange}
            />
          </div>
          {solutions.length > 1 && (
            <ul className="results">
             {solutions.map(movie => (
               <li key={movie.id}>
                 <ResultCard movie={movie}/>
                </li>
             ))} 
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
