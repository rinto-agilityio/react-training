import React from 'react'

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// components
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Category from 'pages/Category'
import Login from '../pages/Login'
import RecipeDetail from '../pages/RecipeDetail'
import Welcome from '../pages/Welcome'

// helpers
import PrivateRoute from '../helpers/PrivateRoute'

const loginPath = '/login'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path={loginPath} component={Login} />
      <PrivateRoute exact path="/" loginPath={loginPath} component={Home} />
      <PrivateRoute loginPath={loginPath} exact path="/recipe-detail/:recipeId/" component={RecipeDetail} />
      <PrivateRoute exact loginPath={loginPath} path="/category" component={Category} />
      <PrivateRoute exact loginPath={loginPath} path="/profile" component={Profile} />
      <PrivateRoute exact loginPath={loginPath} path="/welcome" component={Welcome} />
    </Switch>
  </Router>
)

export default MainRouter
