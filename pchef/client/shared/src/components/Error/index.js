import React from 'react'

// Components
import { Text } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  message: string,
  customStyle?: {},
}

const Error = ({ message, customStyle }: Props) => (
  <Text style={[styles.error, customStyle]}>{message}</Text>
)

Error.defaultProps = {
  customStyle: {},
}

export default Error
