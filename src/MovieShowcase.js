import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(movie =>
<<<<<<< HEAD
       <MovieCard title={movie.title} IMDBRating={movie.IMDBRating}
=======
       <MovieCard title={movie.title} rating={movie.IMDBRating}
>>>>>>> 8ba1c9d6b857df5e813262a7bc0502de545f2a6f
       genres={movie.genres} poster={movie.poster}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
