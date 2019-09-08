import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Movies from '../Screens/Movies';
import TVShow from '../Screens/TVShow';
import Search from '../Screens/Search';

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Movies} />
    <Route path="/tvshow" component={TVShow} />
    <Route path="/search" component={Search} />
  </Router>
)