import React from 'react'

// Components
import { Text } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  errorMessage: string,
  customStyle?: {},
}

const Error = ({ errorMessage, customStyle }: Props) => (
  <Text style={[styles.error, customStyle]}>{errorMessage}</Text>
)

Error.defaultProps = {
  customStyle: {},
}

export default Error
