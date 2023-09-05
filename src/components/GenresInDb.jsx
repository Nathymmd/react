import React, { Component } from 'react';

class GenresInDb extends Component {
  constructor(props){
    super(props);
      this.state = {
        genresInDb: []
      }
  }

  async componentDidMount() {
    try {
      const apiGenres = await fetch('/api/genres')
      const dataGenres = await apiGenres.json();

      this.setState({
        genresInDb: dataGenres.data
      })

    } catch (e) {
      console.error(e)
    }
  }


  render() {
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      { this.state.genresInDb.map( (genre) => (
                          <div key={genre.id} className="col-lg-6 mb-4">
                                  <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {genre.name}
                                        </div>
                                  </div>
                          </div>
                      ))}
                    </div>
                  </div>
            </div>
        </div>
    )
  }

}

export default GenresInDb

