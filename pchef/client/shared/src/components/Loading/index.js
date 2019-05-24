import React from 'react'

// Components
import { ActivityIndicator } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../themes'

type Props = {
  size?: string | number,
  color?: string,
  customStyle?: {},
}

const Loading = ({ size, color, customStyle }: Props) => (
  <ActivityIndicator size={size} color={color} style={customStyle} />
)

Loading.defaultProps = {
  size: METRICS.largeIcon,
  color: COLORS.red,
  customStyle: {},
}

export default Loading
