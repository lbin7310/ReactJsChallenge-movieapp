import React from 'react';
import {withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 10;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid ${props => (props.isSelected ? "#00a8ff" : "#141414")}
  ;
`;

const SLink = styled(Link)` 
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({location: {pathname}} ) => (
   <Header>
    <List>
      <Item isSelected={pathname==="/"}><SLink to="/">Movies</SLink></Item>
      <Item isSelected={pathname==="/tvshow"}><SLink to="/tvshow">TV Show</SLink></Item>
      <Item isSelected={pathname==="/search"}><SLink to="/search">Search</SLink></Item>
    </List>
  </Header>
)
)