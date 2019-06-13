import * as React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { Platform } from 'react-native'

// Layouts
import MainContainer from 'pchef-shared/src/layout/MainContainer'

import Header from 'pchef-shared/src/containers/Header'

// Constants
import { URL } from 'pchef-shared/src/constants/index'

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
    history.push(URL.PROFILE.PATH)
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push(URL.LOG_IN.PATH)
  }

  const handleRedirectWishList = () => {
    history.push(URL.WISH_LIST.PATH)
  }

  const handleRedirectWelcome = () => {
    history.push(URL.WELCOME.PATH)
  }

  const handleRedirectHome = () => {
    history.push(URL.HOME.PATH)
  }
  
  const handleRedirectCreateRecipe = () => {
    history.push(URL.CREATE_RECIPE.PATH)
  }

  const handleDirectTo = id => {
    switch (id) {
      case URL.PROFILE.TITLE:
        handleRedirectProfile()
        break
      case URL.WISH_LIST.TITLE:
        handleRedirectWishList()
        break
      case URL.LOG_OUT.TITLE:
        handleLogout()
        break
      case URL.CREATE_RECIPE.TITLE:
        handleRedirectCreateRecipe()
        break
      default:
        handleRedirectProfile()
    }
  }

  const handleHeaderMenu = () => {
    const currentRoute = window.location.pathname
    if (!currentRoute.includes(URL.WELCOME.PATH) && !currentRoute.includes(URL.LOG_IN.PATH)) {
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
