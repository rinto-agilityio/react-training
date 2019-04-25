/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Query } from 'react-apollo';

//helpers
import PrivateRoute from './utils/PrivateRoute';

//query
import LOGGED_USER from './graphql/queries/Logged';

//import components
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const Login = React.lazy(() => import ('./pages/authentication/Login'))

const loginPath = '/login/';

const AppRoute = () => {
  return (
    <Query
      query={LOGGED_USER}
      fetchPolicy={'cache-and-network'}
    >
      {({ data }) => {
        const { loggedUser } = data
        console.log(loggedUser)
        const isAuthenticated = loggedUser && loggedUser.email ? true : false
        console.log(isAuthenticated)
        return (
          <BrowserRouter>
            <Switch>
              <Route path='/login' component={Login}/>
              <PrivateRoute isAuthenticated={loggedUser ? true : false} loginPath={loginPath} path='/' component={HomePage} />
            </Switch>
          </BrowserRouter>
        )
      }}
    </Query>
  );
};

export default AppRoute;
