import React, { useEffect } from 'react'
import MovieApi from '../../common/apis/MovieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch()
  const movieText = "Harry";

  useEffect(()=>{
    const fetchMovies= async () => {
      const response = await MovieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        // .get('http://www.omdbapi.com/?apikey=2590ae75&s=Harry&type=movie')
        .catch((err)=>{
          console.log("Err :", err);
        });
      dispatch(addMovies(response.data))
    };
    fetchMovies();
  },[dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home;