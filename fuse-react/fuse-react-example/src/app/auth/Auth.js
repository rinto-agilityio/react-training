import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from 'app/auth/store/actions'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as Actions from 'app/store/actions'
import firebaseService from 'app/services/firebaseService'
import auth0Service from 'app/services/auth0Service'
import jwtService from 'app/services/jwtService'
import { Creators as UserCreators } from './redux/actions/UserAction'

class Auth extends Component {
  constructor(props) {
    super(props)

    /**
     * Comment the line if you do not use JWt
     */
    // this.jwtCheck()

    /**
     * Comment the line if you do not use Auth0
     */
    // this.auth0Check();

    /**
     * Comment the line if you do not use Firebase
     */
    this.firebaseCheck()
  }

  jwtCheck = () => {
    const { showMessage, setUserData, logout } = this.props
    jwtService.on('onAutoLogin', () => {
      showMessage({ message: 'Logging in with JWT' })

      /**
       * Sign in and retrieve user data from Api
       */
      jwtService
        .signInWithToken()
        .then(user => {
          setUserData(user)

          showMessage({ message: 'Logged in with JWT' })
        })
        .catch(error => {
          showMessage({ message: error })
        })
    })

    jwtService.on('onAutoLogout', message => {
      if (message) {
        showMessage({ message })
      }
      logout()
    })

    jwtService.init()
  }

  auth0Check = () => {
    auth0Service.init()
    const { showMessage, setUserDataAuth0 } = this.props


    if (auth0Service.isAuthenticated()) {
      showMessage({ message: 'Logging in with Auth0' })

      /**
       * Retrieve user data from Auth0
       */
      auth0Service.getUserData().then(tokenData => {
        setUserDataAuth0(tokenData)

        showMessage({ message: 'Logged in with Auth0' })
      })
    }
  }

  firebaseCheck = () => {
    firebaseService.init()
    const { showMessage, getUserData } = this.props
    firebaseService.onAuthStateChanged(authUser => {
      if (authUser) {
        showMessage({ message: 'Logging in with Firebase' })

        /**
         * Retrieve user data from Firebase
         */
        getUserData(authUser.uid)
      }
    })
  }

  render() {
    const { children } = this.props
    return <React.Fragment>{children}</React.Fragment>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: userActions.logoutUser,
      setUserData: userActions.setUserData,
      setUserDataAuth0: userActions.setUserDataAuth0,
      setUserDataFirebase: userActions.setUserDataFirebase,
      showMessage: Actions.showMessage,
      hideMessage: Actions.hideMessage,
      getUserData: UserCreators.getUserData,
    },
    dispatch,
  )
}

Auth.propTypes = {
  showMessage: PropTypes.func,
  setUserData: PropTypes.func,
  logout: PropTypes.func,
  getUserData: PropTypes.func,
  children: PropTypes.object,
  setUserDataAuth0: PropTypes.func,
}

Auth.defaultProps = {
  setUserData: () => {},
  showMessage: () => {},
  logout: () => {},
  getUserData: () => {},
  children: {},
  setUserDataAuth0: () => {},
}

export default connect(
  null,
  mapDispatchToProps,
)(Auth)
