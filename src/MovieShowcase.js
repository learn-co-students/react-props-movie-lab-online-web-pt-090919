import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(movie => 
    <ul>
    <li Title={movie.title}></li>
    <li IMDB Rating={movie.IMDBRating}></li>
    <li Genres={movie.genres}></li>
    <li Poster={movie.poster}></li>
    </ul>)
  }

  render() {
    return (
      <div id="movie-showcase">
      <MovieCard />
        {this.generateMovieCards()}
      </div>
    )
  }
}
