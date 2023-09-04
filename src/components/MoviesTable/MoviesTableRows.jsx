import React from 'react';
import './moviesTable.css'
import { moviesInDb } from '../../constants';

export default function MoviesTableRows() {
  return (
      <div>
          { moviesInDb.map( (movies, i) => (
            <ul key={movies + i} className='moviesTableGridRows'>
                  <li>{movies.title}</li> 
                  <li>{movies.length}</li> 
                  <li>{movies.rating}</li> 
                  <li>{movies.genre}</li> 
                  <li>{movies.awards}</li> 
            </ul>
          ))}
      </div>
  );
}
