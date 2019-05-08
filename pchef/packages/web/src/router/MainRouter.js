import React from 'react'

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Login from 'pages/Login'
import Category from 'pages/Category'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </Router>
)

export default MainRouter
