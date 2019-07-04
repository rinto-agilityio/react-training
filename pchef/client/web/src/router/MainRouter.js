import React, { lazy } from 'react'

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// components
import Home from 'pages/Home'
import Category from 'pages/Category'
import Login from 'pages/Login'
import Welcome from 'pages/Welcome'
import WishList from 'pages/WishList'

// helpers
import PrivateRoute from './PrivateRoute'

// lazy import components
const RecipeDetail = lazy(() => import('pages/RecipeDetail'))
const Profile = lazy(() => import('pages/Profile'))
const CreateRecipe = lazy(() => import('pages/CreateRecipe'))
const RecipeStep = lazy(() => import('pages/RecipeStep'))
const WishListForm = lazy(() => import('pages/WishListForm'))

const loginPath = '/login'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path={loginPath} component={Login} />
      <PrivateRoute exact path="/" loginPath={loginPath} component={Home} />
      <PrivateRoute loginPath={loginPath} exact path="/recipe-detail/:recipeId/" component={RecipeDetail} />
      <PrivateRoute exact loginPath={loginPath} path="/category/:categoryId" component={Category} />
      <PrivateRoute exact loginPath={loginPath} path="/profile" component={Profile} />
      <PrivateRoute exact loginPath={loginPath} path="/welcome" component={Welcome} />
      <PrivateRoute exact loginPath={loginPath} path="/recipe-step/:recipeId/" component={RecipeStep} />
      <PrivateRoute exact loginPath={loginPath} path="/wishlist" component={WishList} />
      <PrivateRoute exact loginPath={loginPath} path="/wishlist-form" component={WishListForm} />
      <PrivateRoute exact loginPath={loginPath} path="/create-recipe" component={CreateRecipe} />
    </Switch>
  </Router>
)

export default MainRouter
