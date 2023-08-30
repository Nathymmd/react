import React from 'react';
import { genresInDb } from '../constants'

export default function GenresInDb() {
  return(
    <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
      </div>
      <div className="card-body">
        <div className="row">
          
          { genresInDb.map( (genre) => (
              <div key={genre.id} className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                            <div className="card-body">
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
