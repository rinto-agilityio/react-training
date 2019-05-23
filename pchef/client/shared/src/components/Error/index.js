import React from 'react'

// Components
import { Text } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  content: string,
  customStyle?: {},
}

const Error = ({ content, customStyle }: Props) => (
  <Text style={[styles.error, customStyle]}>{content}</Text>
)

Error.defaultProps = {
  customStyle: {},
}

export default Error
