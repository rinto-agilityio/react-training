import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { ApolloConsumer } from 'react-apollo';

//helpers
import PrivateRoute from './utils/PrivateRoute';

//import components
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const Login = React.lazy(() => import ('./pages/authentication/login/Login'))
const SignUp = React.lazy(() => import ('./pages/authentication/signUp/SignUp'))

const AppRoute = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/login/'} component={Login}/>
        <Route path={'/signUp'} component={SignUp}/>
        <PrivateRoute loginPath={'/login/'} path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
