import React, {useEffect, useState} from 'react';
import Section from '../Components/Section';
import Loader from '../Components/Loader';
import { showOnTheAir, showPopular } from '../api';
import Poster from '../Components/Poster';

export default () => {
  const [ onTheAir, setOnTheAir ] = useState([]);
  const [ popular, setPopular ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const getShows = async() => {
    try { 
      const { data: {results: onTheAir} } = await showOnTheAir();
      const { data: {results: popular} } = await showPopular();
      setOnTheAir(onTheAir);
      setPopular(popular);
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getShows();
  }, []);

  return loading ? (
    <Loader />
    ) : (
    <>
      <Section title="On The Air" content={
        onTheAir.map(show => 
          <Poster 
            key={show.id}
            posterUrl={show.poster_path}
            grade={show.vote_average}
            title={show.original_name}
            year={show.first_air_date.substring(0, 4)}
          />
        )
      }/>
      <Section title="Popular Shows" content={
        popular.map(show => 
          <Poster 
            key={show.id}
            posterUrl={show.poster_path}
            grade={show.vote_average}
            title={show.original_name}
            year={show.first_air_date.substring(0, 4)}
          />
        )
      }/>
    </>
  )
}