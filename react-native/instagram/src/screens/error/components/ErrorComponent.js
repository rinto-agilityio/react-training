// Libs
import React from 'react'
import { Alert, NetInfo } from 'react-native'
import PropTypes from 'prop-types'

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
  handleConnectionChange = (isConnected) => {
    console.log('isConnected: ', isConnected);
    if (!isConnected) {
      console.log('Dispatch action ADD_ERROR for offline')
    } else {
      console.log('Should not dispatch here')
    }
  }

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

  render() {
    const { error } = this.props

    return showAlert(error)
  }
}

ErrorComponent.propTypes = {
  error: PropTypes.object.isRequired
}

export default ErrorComponent
