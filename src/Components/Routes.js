import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Movies from '../Screens/Movies';
import TVShow from '../Screens/TVShow';
import Search from '../Screens/Search';
import MovieDetail from '../Screens/MovieDetail';
import ShowDetail from '../Screens/ShowDetail';

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Movies} />
    <Route path="/tv" exact component={TVShow} />
    <Route path="/search" component={Search} />
    <Route path="/movie/:id" component={MovieDetail} />
    <Route path="/tv/:id" component={ShowDetail} />
  </Router>
)