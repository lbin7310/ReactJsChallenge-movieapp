import React from 'react';
import styled from 'styled-components';
import { Imdb } from 'styled-icons/boxicons-logos/Imdb';
import { Link, Route, withRouter } from 'react-router-dom';
import Videos from '../Screens/Videos';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url( ${props => props.backdrop} );
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Poster = styled.div`
  border-radius: 5px;
  width: 30%;
  background-image: url(${props => props.psImage});
  background-size: cover;
  background-position: center center;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 1;
`

const Info = styled.div`
  width: 70%;
  margin-left: 30px;
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
`;

const Item = styled.div`
  &:not(:last-child){
    margin-bottom : 10px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 300;
  padding-top: 10px;
  width: 50%;
  line-height: 22.5px;
  opacity: 0.8;
`;

const Divider = styled.span`
  display: inline-block;
  margin: 0 10px;
`

const YellowImdb = styled(Imdb)`
  display: block;
  position: relative;
  left: -10px;
  color: yellow;
  width: 5%;
  height: 5%;
  opacity: 0.3;
  cursor: pointer;
  &:hover{
      opacity: 1;
    }
`;

const ImdbLink = styled.a``;

const Links = styled.div``;

const VideosLink = styled(Link)``;

const Detail = ({movie, match}) => (
  <Container >
    <BackDrop backdrop={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    <Content>
      <Poster psImage={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
      <Info>
        <Title>{movie.original_title ? movie.original_title : movie.original_name}
          
        </Title>
        <Item>
          {movie.release_date ? 
            movie.release_date.substring(0, 4) 
            : movie.last_air_date.substring(0, 4)} 
          <Divider>•</Divider> 
          {(movie.runtime === null) ? "120" 
            : (movie.runtime 
              ? movie.runtime 
              : movie.episode_run_time[0])} min
        </Item>
        <Item>{movie.genres.map( 
          (genre, idx) => (movie.genres.length-1 !== idx) ? `${genre.name} / ` : genre.name)}
        </Item>
        <Description>{movie.overview}</Description>
        { movie.imdb_id ?
            <ImdbLink href={`https://www.imdb.com/title/${movie.imdb_id}/`} target="_sub">
              <YellowImdb />
            </ImdbLink>
            : ''
        }
        <VideosLink to={`${match.url}/videos`}>VIDEOS</VideosLink>
        <Route path={`${match.path}/:media`} render={props => <Videos {...props} videos={movie.videos}/>}/>
      </Info>
    </Content>
  </Container>
)

export default withRouter(Detail);