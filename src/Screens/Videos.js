import React, {useEffect, useState} from 'react';
import Video from '../Components/Video';
import Loader from '../Components/Loader';

const Videos = ({videos: {results}}) => {
  const [ videos, setVideos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const setMedia = () => {
    try {
      setVideos(results);
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setMedia();
  }, [])
  console.log(videos);
  return loading ? (
      <Loader /> 
    ) : (
      <>
        {videos.map( video => <Video key={video.id} videoKey={video.key} /> )}
      </>
    )
}

export default Videos;