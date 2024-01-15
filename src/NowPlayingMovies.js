import React, { useState } from 'react';
import { fetchNowPlayingMovies, fetchMovieDetails } from './Api';
import './Home/Home.css';
import { Link } from 'react-router-dom';

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
        <div className="card" key={movie.id}>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='date'>Date de sortie: {movie.release_date}</h4>
          <Link to={`/Details/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </Link>
          <p>Cliquez sur l'image pour plus de détails</p>
        </div>
      ))}
    </div>
  );
}

export default NowPlayingMovies;
