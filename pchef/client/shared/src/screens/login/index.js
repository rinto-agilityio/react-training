// Libs
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

// Components
import LoginForm from './components/LoginForm'
import styles from './styles'

import { FOLLOWEDCATEGORY } from '../../constants/index'

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
  data = {},
  handleNavigateHome,
  handleNavigateWelcome,
}: Props) => {
  const [error, setError] = useState(false)
  const [isSubmit, setSubmit] = useState(false)
  const [followCategory, setFollowCategory] = useState([])

  useEffect(() => {
    const followCategory = data.followCategory || []
    setFollowCategory(followCategory)
  }, [data.followCategory])

  const handleNavigatePage = () => {
    if (followCategory.length >= FOLLOWEDCATEGORY) {
      handleNavigateHome()
    } else {
      handleNavigateWelcome()
    }
  }

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
          handleNavigatePage()
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

export default Login
