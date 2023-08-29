import React from 'react';
import { ContentRowMovies, LastMovieInDb, GenresInDb} from './index'

export default function ContentRowTop() {
  return (
    <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
                <ContentRowMovies />
                
          <div class="row">
                <LastMovieInDb />
                <GenresInDb />
          </div>
    </div>

  );
}