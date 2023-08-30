import React from 'react';
import { genresInDb } from '../constants'

export default function LastMovieInDb() {
  return(
    <div class="col-lg-6 mb-4">						
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
      </div>
      <div class="card-body">
        <div class="row">
          
          { genresInDb.map( (genre) => (
              <div class="col-lg-6 mb-4">
                      <div class="card bg-dark text-white shadow">
                            <div key={genre.id} class="card-body">
                                {genre.title}
                            </div>
                      </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  </div>
  );
}
