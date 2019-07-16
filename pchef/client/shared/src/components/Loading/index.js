import React from 'react'

// Components
import { ActivityIndicator, View } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../themes'

type Props = {
  size?: string | number,
  color?: string,
  customStyle?: {},
}

const Loading = ({ size, color, customStyle }: Props) => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <ActivityIndicator
      size={size === 'medium' ? 'small' : size}
      color={color}
      style={customStyle}
    />
  </View>
)

Loading.defaultProps = {
  size: METRICS.icon.lg,
  color: COLORS.baseGray,
  customStyle: {},
}

export default Loading
