import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

type Props = {
  component: any,
  path: string,
  loginPath: string,
}

const PrivateRoute = ({ component: Component, loginPath, path, ...rest }: Props) => {
  const isAuthenticated = localStorage.getItem('token') !== null

  return (
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
}

export default PrivateRoute
