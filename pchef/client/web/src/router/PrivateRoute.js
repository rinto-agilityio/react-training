import * as React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { Platform } from 'react-native'

// Layouts
import MainContainer from 'pchef-shared/src/layout/MainContainer'

import Header from 'pchef-shared/src/containers/Header'

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
    history.push('/profile')
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  const handleRedirectWishList = () => {
    history.push('/wishlist')
  }

  const handleRedirectWelcome = () => {
    history.push('/welcome')
  }

  const handleRedirectHome = () => {
    history.push('/')
  }

  const handleDirectTo = id => {
    switch (id) {
      case 'profile':
        handleRedirectProfile()
        break
      case 'wish-list':
        handleRedirectWishList()
        break
      case 'logout':
        handleLogout()
        break
      default:
        handleRedirectProfile()
    }
  }

  const handleHeaderMenu = () => {
    const currentRoute = window.location.pathname
    if (!currentRoute.includes('/welcome') && !currentRoute.includes('/login')) {
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
