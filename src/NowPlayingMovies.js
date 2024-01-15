import React, { useState } from 'react';
import { fetchNowPlayingMovies} from './Api';
import { Link } from 'react-router-dom';
import formatDateToFrench from './FormatDate';


function NowPlayingMovies() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const movies = await fetchNowPlayingMovies();
    setMovies(movies);
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>The Movie List</h1>
        <h2>Voici les dernières sorties:</h2>
      </div>
    <div className='container'>
      {movies.map((movie) => (
        <div className="card" key={movie.id}>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='date'>Date de sortie: {formatDateToFrench(movie.release_date)}</h4>
          <Link to={`/Details/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </Link>
          <p>Cliquez sur l'image pour plus de détails</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default NowPlayingMovies;
