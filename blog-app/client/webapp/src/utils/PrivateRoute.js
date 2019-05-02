import React from 'react'
import { Query } from 'react-apollo';
import {
  Route,
  Redirect
} from 'react-router-dom'

//query
import { LOGGED_USER } from '../graphql/queries/Queries'

//prop type
import PropTypes from 'prop-types'

const PrivateRoute = ({ component, loginPath, path}) => (
  <Query query= { LOGGED_USER } >
    {({ data, error }) => {
      if (error || !data.loggedUser) {
        return <Redirect to={{
           pathname: loginPath
        }} />;
      }
      return <Route exact path={path} component={component} />;
    }}
  </Query>
)

PrivateRoute.propTypes = {
  loginPath: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

PrivateRoute.defaultProps = {
  loginPath: '',
  component: null
}

export default PrivateRoute
