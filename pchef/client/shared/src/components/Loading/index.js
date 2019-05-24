import React from 'react'

// Components
import { ActivityIndicator, View } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../themes'

// Styles
import styles from './styles'

type Props = {
  size?: string | number,
  color?: string,
  customStyle?: {},
}

const Loading = ({ size, color, customStyle }: Props) => (
  <View style={styles.wrapper}>
    <ActivityIndicator size={size === 'medium' ? 'small' : size} color={color} style={customStyle} />
  </View>
)

Loading.defaultProps = {
  size: METRICS.largeIcon,
  color: COLORS.baseGray,
  customStyle: {},
}

export default Loading
