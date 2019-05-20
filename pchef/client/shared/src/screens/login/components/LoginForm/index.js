// Libs
import React, { useRef } from 'react'
import { View } from 'react-native'

// Components
import TextBox from '../../../../components/TextBox'
import Button from '../../../../components/Button'
import Wrapper from '../../../../layout/Wrapper'
import { PATTERN } from '../../../../constants'

// Styles
import styles from './styles'

type Props = {
  customStyles?: Object,
  onSubmit: (email: string, password: string) => Promise<void>,
  type?: string,
  setError: (error: boolean) => void,
  error?: boolean,
  isSubmit?: boolean,
}

const LoginForm = ({
  customStyles = {},
  onSubmit,
  type = 'primary',
  setError,
  error,
  isSubmit,
}: Props) => {
  // define user email ref and password ref
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  // handling submit form
  const handlingSubmit = () => {
    // get email input and password input
    const email = emailRef.current ? emailRef.current._node.value.trim() : ''
    const password = passwordRef.current
      ? passwordRef.current._node.value.trim()
      : ''

    // validate email and password
    if (PATTERN.EMAIL.test(email) && password.length >= 8) {
      setError(false)
      onSubmit(email, password)
    } else {
      setError(true)
    }
  }

  // input style
  const inputStyles = [styles.input, styles[`${type}Input`]]

  // form group style
  const formGroupStyle = [
    styles.formGroup,
    styles[`${type}FormGroup`],
    error ? styles.errorFormGroup : null,
  ]

  return (
    <Wrapper
      direction="column"
      customStyles={[
        styles.container,
        styles[`${type}Container`],
        customStyles,
      ]}
    >
      <View style={formGroupStyle}>
        <TextBox
          placeholder="username@asnet.com.vn"
          placeholderTextColor="darkgray"
          customStyle={inputStyles}
          refInput={emailRef}
        />
      </View>
      <View style={formGroupStyle}>
        <TextBox
          placeholder="Password at least 8 characters"
          placeholderTextColor="darkgray"
          customStyle={inputStyles}
          refInput={passwordRef}
          secureTextEntry
        />
      </View>
      <View style={[styles.formGroup, styles[`${type}FormGroup`]]}>
        <Button
          title="Login"
          contentStyle={[styles.button, styles[`${type}Button`]]}
          buttonStyle={styles.buttonWrapper}
          onPress={handlingSubmit}
          disabled={isSubmit}
        />
      </View>
    </Wrapper>
  )
}

LoginForm.defaultProps = {
  customStyles: {},
  type: 'primary',
  error: false,
  isSubmit: false,
}

export default LoginForm
