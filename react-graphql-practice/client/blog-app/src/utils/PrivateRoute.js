import React from 'react'

import PropTypes from 'prop-types'
import {
  Route,
  Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, loginPath, path}) => (
  <Route render={props => (
    isAuthenticated || (!isAuthenticated && loginPath === path) ? (
      <Component />
    ) : (
      <Redirect to={{
        pathname: loginPath
      }} />
    )
  )} />
)

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginPath: PropTypes.string
}

PrivateRoute.defaultProps = {
  isAuthenticated: false,
  loginPath: ''
}

export default PrivateRoute
