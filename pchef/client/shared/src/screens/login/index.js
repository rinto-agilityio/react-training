// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, memo } from 'react'
import { View, Text } from 'react-native'

// Components
import LoginForm from './components/LoginForm'
import styles from './styles'


type Props = {
  customStyles?: Object,
  signInUser: (
    email: string,
    password: string
  ) => Promise<{ data: { signInUser: { token: string } } }>,
  handlingLoginSuccess: (token: string) => void,
  type?: string,
  data: {
    followCategory: Array<{
      id: string,
    }>,
  },
  handleNavigateHome: () => void,
  handleNavigateWelcome: () => void,
}

// Login screen
const Login = ({
  customStyles = {},
  signInUser,
  type = 'primary',
  handlingLoginSuccess,
}: Props) => {
  const [error, setError] = useState(false)
  const [isSubmit, setSubmit] = useState(false)

  // handling sign in with email and password
  const handlingSignIn = async (email: string, password: string) => {
    // set form submit to true
    setSubmit(true)

    try {
      // get token by user email and password
      await signInUser(email, password).then(({ data }) => {
        const {
          signInUser: { token },
        } = data

        if (token) {
          setError(false)
          handlingLoginSuccess(token)
        }
        setSubmit(false)
      })
    } catch (err) {
      setError(true)
      setSubmit(false)
    }
  }

  return (
    <View style={[styles.container, styles[`${type}Container`]]}>
      {/* Display error */}
      {error ? (
        <View style={[styles.errorWrapper, styles[`${type}ErrorWrapper`]]}>
          <Text style={[styles.error, styles[`${type}Error`]]}>
            Login failed! Email or password incorrect.
          </Text>
        </View>
      ) : null}

      {/* Show app name on mobile app */}
      {type === 'primary' && <Text style={styles.text}>PChef</Text>}

      <LoginForm
        customStyles={customStyles}
        onSubmit={handlingSignIn}
        setError={setError}
        error={error}
        isSubmit={isSubmit}
        type={type}
      />
    </View>
  )
}

Login.defaultProps = {
  customStyles: {},
  type: 'primary',
}

export default memo<Props>(Login)
