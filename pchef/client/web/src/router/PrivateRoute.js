import * as React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { Platform } from 'react-native'

// Layouts
import MainContainer from 'pchef-shared/src/layout/MainContainer'

import Header from 'pchef-shared/src/containers/Header'

// Constants
import { URL, PROFILE, WISH_LIST, LOG_OUT } from '../constants'

type Props = {
  component: any,
  path: string,
  loginPath: string,
  history: Object,
}

const PrivateRoute = ({ component: Component, loginPath, path, history, ...rest }: Props) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  const platform = Platform.OS

  const handleRedirectProfile = () => {
    history.push(URL.PROFILE)
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push(URL.LOGIN)
  }

  const handleRedirectWishList = () => {
    history.push(URL.WISH_LIST)
  }

  const handleRedirectWelcome = () => {
    history.push(URL.WELCOME)
  }

  const handleRedirectHome = () => {
    history.push(URL.HOME)
  }

  const handleDirectTo = id => {
    switch (id) {
      case PROFILE:
        handleRedirectProfile()
        break
      case WISH_LIST:
        handleRedirectWishList()
        break
      case LOG_OUT:
        handleLogout()
        break
      default:
        handleRedirectProfile()
    }
  }

  const handleHeaderMenu = () => {
    const currentRoute = window.location.pathname
    if (!currentRoute.includes(URL.WELCOME) && !currentRoute.includes(URL.LOGIN)) {
      return (
        <Header
          onPressCategoryIcon={handleRedirectWelcome}
          onPressLogo={handleRedirectHome}
          onDirectTo={handleDirectTo}
        />
      )
    }
  }

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated || (!isAuthenticated && loginPath === path) ? (
          <>
            { handleHeaderMenu() }
            <MainContainer type={platform}>
              <Component path={path} {...props} />
            </MainContainer>

          </>
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

export default withRouter(PrivateRoute)
