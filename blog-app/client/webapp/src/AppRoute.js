/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

//helpers
import PrivateRoute from './utils/PrivateRoute';

//import components
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const Login = React.lazy(() => import ('./pages/authentication/Login'))
const SignUp = React.lazy(() => import ('./pages/authentication/SignUp'))

const loginPath = '/login/';

const AppRoute = () => {
  return (
    <ApolloConsumer >
    {
      client => {
        return (
          <BrowserRouter>
            <Switch>
              <Route path={loginPath} component={Login}/>
              <Route path={'/signUp'} component={SignUp}/>
              <PrivateRoute loginPath={loginPath} path='/' component={HomePage} accessClient={client}/>
            </Switch>
          </BrowserRouter>
        )
      }
    }
    </ApolloConsumer>
  )

};

export default AppRoute;
