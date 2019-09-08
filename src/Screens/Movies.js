import React, {useState, useEffect} from 'react';
import Section from '../Components/Section';
import { moviesNowPlaying, popularMovies } from '../api';
import Loader from '../Components/Loader';
import Poster from '../Components/Poster';

export default () => {
  const [ movies, setMovies ] = useState([]);
  const [ popular, setPopular ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const getMovies = async () => {
    try {
      const {data: {results: movies}} = await moviesNowPlaying();
      const {data: {results: popular}} = await popularMovies();
      setMovies(movies);
      setPopular(popular);
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <>
      <Section title="Now Playing" content={
        movies.map(movie => 
          <Poster 
            key={movie.id}
            posterUrl={movie.poster_path}
            grade={movie.vote_average}
            title={movie.title}
            year={movie.release_date.substring(0, 4)}
          />
        )
      }/>
      <Section title="Popular Movies" content={
        popular.map(movie => 
          <Poster 
            key={movie.id}
            posterUrl={movie.poster_path}
            grade={movie.vote_average}
            title={movie.title}
            year={movie.release_date.substring(0, 4)}
          />
        )
      }/>
    </>
  )
}