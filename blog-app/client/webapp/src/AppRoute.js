/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//helpers
import PrivateRoute from './utils/PrivateRoute';

//import components
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const Login = React.lazy(() => import ('./pages/authentication/Login'))
const SignUp = React.lazy(() => import ('./pages/authentication/SignUp'))

const loginPath = '/login/';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={loginPath} component={Login}/>
        <Route path={'/signUp'} component={SignUp}/>
        <PrivateRoute loginPath={loginPath} path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  )

};

export default AppRoute;
