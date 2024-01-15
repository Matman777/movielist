
import '../App.css';

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../Api';



function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(id);
      console.log(movieDetails);
      setMovie(movieDetails);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>The Movie List</h1>
  
      <div className='detail_container'>
        <div className='left_column'>
          <img className='img_detail' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className='right_column'>
          <h1>{movie.title}</h1>
          <p className='tagline'>{movie.tagline}</p>
          <div className='genres'>
            Genres: 
            {movie.genres.map(genre => (
              <span key={genre.id} className='genre'>{genre.name} </span>
            ))}
          </div>
          <div className='overview'>
            {movie.overview}
          </div>
          <Link to="/" className="retour-btn">Retour à la liste</Link>
        </div>
      </div>
      <footer>
        <div className="foot">
        <div>The Movie List</div>
        <div>© 2024 Matman. Tous droits réservés</div>
        </div>
    </footer>
    </div>

  );
  
}

export default Details;
