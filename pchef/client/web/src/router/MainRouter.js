import React from 'react'

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// components
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import LoginContainer from 'pchef-shared/src/containers/Login'
import Category from 'pages/Category'

// helpers
import PrivateRoute from '../helpers/PrivateRoute'

const loginPath = '/login'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path={loginPath} component={LoginContainer} />
      <PrivateRoute exact path="/" loginPath={loginPath} component={Home} />
      <PrivateRoute exact loginPath={loginPath} path="/category" component={Category} />
      <PrivateRoute exact loginPath={loginPath} path="/profile" component={Profile} />
    </Switch>
  </Router>
)

export default MainRouter
