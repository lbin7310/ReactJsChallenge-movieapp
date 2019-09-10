import React, {useEffect, useState} from 'react';
import Detail from '../Components/Detail';
import { getMovieDetail } from '../api';
import Loader from '../Components/Loader';

const MovieDetail = ({match: {params:{id}}}) => {
  const [ movie, setMovie ] = useState({});
  const [ loading, setLoading ] = useState(true);

  const getMovie = async(movieId) => {
    try {
      const {data: movie} = await getMovieDetail(movieId);
      setMovie(movie)
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovie(id);
  }, [id])

  return loading ? (
    <Loader/>
  ) : (
    <Detail 
      movie={movie}
    />
  )
}

export default MovieDetail;