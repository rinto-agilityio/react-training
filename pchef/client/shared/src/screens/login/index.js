// Libs
import React, { useState } from 'react'
import { View, Text } from 'react-native'

// Components
import LoginForm from './components/LoginForm'
import styles from './styles'

type Props = {
  customStyles?: Object,
  onSubmit: (email: string, password: string) => void,
  type?: string,
  userError?: boolean,
}

// Login screen
const Login = ({
  customStyles = {},
  onSubmit,
  type = 'primary',
  userError,
}: Props) => {
  const [error, setError] = useState(false)

  // check if login has any error
  const hasError = error || userError

  return (
    <View style={[styles.container, styles[`${type}Container`]]}>
      {/* Display error */}
      {hasError ? (
        <View style={[styles.errorWrapper, styles[`${type}ErrorWrapper`]]}>
          <Text style={[styles.error, styles[`${type}Error`]]}>
            Login failed! Email or password incorrect.
          </Text>
        </View>
      ) : null}

      {/* Show app name on mobile app */}
      {type === 'primary' && <Text style={styles.text}>PChef</Text>}

      {/* Login form */}
      <LoginForm
        customStyles={customStyles}
        onSubmit={onSubmit}
        setError={setError}
        hasError={hasError}
        type={type}
      />
    </View>
  )
}

Login.defaultProps = {
  customStyles: {},
  type: 'primary',
  userError: false,
}

export default Login
