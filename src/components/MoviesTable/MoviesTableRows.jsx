import React, { Component } from 'react';
import './moviesTable.css'
import { MoviesInDb } from '../index'
// import { moviesInDb } from '../../constants';

class MoviesTableRows extends Component {
  constructor(props){
    super(props);
      this.state = {
        moviesInDb: []
      }
  }

  componentDidMount () {
    fetch('/api/movies')
    .then( respuesta => {
      return respuesta.json()
    })
    .then( data => {
      this.setState({moviesInDb: data.data})
    })
    .catch(e => {console.log(e)})
  }

  render() {
    return (
      this.state.moviesInDb.map( (movie, i) => {
        return <MoviesInDb key={movie + i} {...movie} />})
    )
  }
}

export default MoviesTableRows
