import React from 'react';
import './moviesTable.css'
import { MoviesInDb } from '../index'
import { moviesInDb } from '../../constants';

export default function MoviesTableRows() {
  return (
    moviesInDb.map( (movie, i) => <MoviesInDb key={movie + i} {...movie} />)
  );
}
