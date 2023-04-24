import React, { useState } from 'react';
import { fetchNowPlayingMovies, fetchMovieDetails } from './Api';
import './Home/Home.css';

function NowPlayingMovies() {
  const [movies, setMovies] = useState([]);

  const handleMovieClick = async (id) => {
    const movie = await fetchMovieDetails(id);
    console.log(movie);
  }

  const fetchMovies = async () => {
    const movies = await fetchNowPlayingMovies();
    setMovies(movies);
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='container'>
      {movies.map((movie) => (
        <a href={'/Details?id='+movie.id}  key={movie.id} >
          <h3>{movie.title}</h3>
          <h4>{movie.release_date}</h4>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
        </a>
      ))}
    </div>
  );
}

export default NowPlayingMovies;
