import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const VideoPlay = styled.embed`
  display: inline;
`;

const Video = ({videoKey}) => (
  <Container>
    <VideoPlay width="420" height="315" src={`https://www.youtube.com/v/${videoKey}`}/>
  </Container>
)

export default Video;