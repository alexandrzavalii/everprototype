import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Movies from '../entertainment/movies/Movies';
import Grid from './Grid';
// import Sections from './Sections';

const Main = () => (
  <main>
    {/* <Sections /> */}
    <Switch>
      <Route exact path='/' component={Grid} />
      <Route path='/entertainment/movies' component={Movies} />
    </Switch>
  </main>
)

export default Main
