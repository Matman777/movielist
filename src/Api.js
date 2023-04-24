export async function fetchNowPlayingMovies() {
    const apiKey = '613c0b885f2080e2f47610c578a49c59';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
  
 export const fetchMovieDetails = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    );
    const data = await response.json();
    return data;
  }

