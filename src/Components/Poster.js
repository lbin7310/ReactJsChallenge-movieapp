import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
`;

const Image = styled.div`
  border-radius: 3px;
  background-image: url(${props => props.posterUrl});
  height: 180px;
  background-size: cover;
  transition: opacity 0.1s linear;
`;

const Grade = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
  font-size: 12px;
`;

const Title = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Year = styled.div `
  font-size: 12px;
  opacity: 0.1s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover{
    ${Image}{
      opacity: 0.3;
    }
    ${Grade}{
      opacity: 1;
    }
  }
`;

const Content = styled.div`
`;

const Poster = ({id, title, grade, year, posterUrl, isMovie}) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`} >
    <Container>
      <ImageContainer>
        <Image posterUrl={`https://image.tmdb.org/t/p/w300${posterUrl}`}/>
        <Grade><span role="img" aria-label="Star"> ⭐️</span>{grade} / 10</Grade>
      </ImageContainer>
      <Content>
        <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
        <Year>{year}</Year>
      </Content>
    </Container>
  </Link>
)

export default Poster;