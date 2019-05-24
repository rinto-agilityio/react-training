// Libs
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

// Themes
import { COLORS } from '../../themes'

// Styles
import styles from './styles'

type Props = {
  size?: string,
}

const Loading = ({
  size = 'small',
}: Props) => (
  <View style={styles.wrapper}>
    <ActivityIndicator size={size === 'medium' ? 'small' : size} color={COLORS.baseGray} />
  </View>
)

Loading.defaultProps = {
  size: 'small',
}

export default Loading
