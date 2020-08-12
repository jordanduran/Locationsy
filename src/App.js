import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import MainNavigation from './shared/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/'>
            <Users />
          </Route>
          <Route exact path='/:userId/locations'>
            <UserPlaces />
          </Route>
          <Route exact path='/locations/new'>
            <NewPlace />
          </Route>
          <Route exact path='locations/:locationId'>
            <UpdatePlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
