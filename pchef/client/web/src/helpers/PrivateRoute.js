import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

type Props = {
  component: any,
  path: string,
  loginPath: string,
}

const isAuthenticated = localStorage.getItem('token') !== null

const PrivateRoute = ({ component: Component, loginPath, path, ...rest }: Props) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated || (!isAuthenticated && loginPath === path) ? (
        <Component path={path} {...props} />
      ) : (
        <Redirect to={{
          pathname: loginPath,
        }}
        />
      )
    )}
  />
)

export default PrivateRoute
