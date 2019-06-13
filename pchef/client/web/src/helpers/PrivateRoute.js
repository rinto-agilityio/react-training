import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Platform } from 'react-native'

// Layouts
import MainContainer from 'pchef-shared/src/layout/MainContainer'

type Props = {
  component: any,
  path: string,
  loginPath: string,
}

const PrivateRoute = ({ component: Component, loginPath, path, ...rest }: Props) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  const platform = Platform.OS

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated || (!isAuthenticated && loginPath === path) ? (
          <MainContainer type={platform}>
            <Component path={path} {...props} />
          </MainContainer>
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
