import React, {useEffect, useState} from 'react';
import Detail from '../Components/Detail';
import { getShowDetail } from '../api';
import Loader from '../Components/Loader';

const ShowDetail = ({match: {params:{id}}}) => {
  const [ show, setShow ] = useState({});
  const [ loading, setLoading ] = useState(true);

  const getShow = async(showId) => {
    try {
      const {data: show} = await getShowDetail(showId);
      setShow(show);
      console.log(show);
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getShow(id);
  }, [id])

  return loading ? (
    <Loader/>
  ) : (
    <Detail 
      movie={show}
    />
  )
}

export default ShowDetail;