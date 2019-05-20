// Libs
import React, { useState } from 'react'
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
  type?: string,
}

// Login screen
const Login = (props: Props) => {
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
          localStorage.setItem('token', token)
        }
        setSubmit(false)
      })
    } catch (err) {
      setError(true)
      setSubmit(false)
    }
  }

  // get Login props
  const { customStyles = {}, signInUser, type = 'primary' } = props

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

export default Login
