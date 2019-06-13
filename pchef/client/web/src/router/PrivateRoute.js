import * as React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { Platform } from 'react-native'

// Layouts
import MainContainer from 'pchef-shared/src/layout/MainContainer'

import Header from 'pchef-shared/src/containers/Header'

// Constants
import { HOME, WELCOME, LOG_IN, PROFILE, WISH_LIST, LOG_OUT } from '../constants'

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
    history.push(`/${PROFILE}`)
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push(`/${LOG_IN}`)
  }

  const handleRedirectWishList = () => {
    history.push(`/${WISH_LIST}`)
  }

  const handleRedirectWelcome = () => {
    history.push(`/${WELCOME}`)
  }

  const handleRedirectHome = () => {
    history.push(`/${HOME}`)
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
    if (!currentRoute.includes(`/${WELCOME}`) && !currentRoute.includes(`/${LOG_IN}`)) {
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
