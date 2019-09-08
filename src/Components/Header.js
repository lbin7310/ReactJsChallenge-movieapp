import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const List = styled.ul``;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
   <Container>
    <List>
      <Item><SLink to="/">Movies</SLink></Item>
      <Item><SLink to="/tvshow">TV Show</SLink></Item>
      <Item><SLink to="/search">Search</SLink></Item>
    </List>
  </Container>
)