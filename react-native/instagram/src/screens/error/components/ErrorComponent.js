// Libs
import React from 'react'
import { Alert, NetInfo } from 'react-native'
import PropTypes from 'prop-types'

// Helpers
import MESSAGES from '@constants/messages'
import ERROR_TYPES from '@constants/error-types'

const showAlert = error => {
  if (!error.errorType && !error.message) {
    return null
  }

  Alert.alert(
    `${error.errorType} Error`,
    error.message,
    { cancelable: true }
  )

  return null
}

class ErrorComponent extends React.Component {
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { error: nextPropsError } = nextProps,
      { error: thisPropsError } = this.props

    if (!nextPropsError.message &&
      nextPropsError.message !== thisPropsError.message) {
      return false
    }

    return true
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)
  }

  /**
   * Show alert if no network connection
   * @param {bool} isConnected - Connect status
   * @returns {object} Dispatch an action
   */
  handleConnectionChange = isConnected => {
    if (!isConnected) {
      const { addError } = this.props

      addError({
        message: MESSAGES.NO_NETWORK,
        type: ERROR_TYPES.NETWORK
      })
    }
  }

  render() {
    const { error } = this.props

    return showAlert(error)
  }
}

ErrorComponent.propTypes = {
  error: PropTypes.object.isRequired,
  addError: PropTypes.func.isRequired
}

export default ErrorComponent
