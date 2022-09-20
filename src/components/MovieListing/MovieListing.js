import React from 'react'
import { useSelector } from 'react-redux';
// import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";

function MovieListing() {
  // const moviesList = useSelector(getAllMovies);
  const moviesList = useSelector((state) => state.movies.movies);
  console.log("Ini Movies listing : ",moviesList);

  let renderMovies = "";

  renderMovies = moviesList.Response === "True" ? (
    moviesList.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
     ) : (
    <div className='movie-error'>
      <h3>{moviesList.Error}</h3>
    </div>
  )
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movie</h2>
        <div className='movie-container'>
          {renderMovies}
        </div>
      </div>
    </div>
  )
}

export default MovieListing;