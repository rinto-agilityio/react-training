// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'

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

export default memo<Props>(Error)
