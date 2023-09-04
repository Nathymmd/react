import React from 'react'
import './moviesTable.css'
import { MoviesTableRows } from '../index'

export default function MoviesTable() {
  return (
          <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <ul className='moviesTableGridHeader'>
                <li >Título</li> 
                <li>Duración</li> 
                <li>Rating</li> 
                <li>Género</li> 
                <li>Premios</li> 
              </ul>

              <MoviesTableRows />
              
              <ul className='moviesTableGridHeader'>
                <li>Título</li> 
                <li>Duración</li> 
                <li>Rating</li> 
                <li>Género</li> 
                <li>Premios</li> 
              </ul>
            </div>
          </div>

  );
}

