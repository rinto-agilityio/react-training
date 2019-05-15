// Libs
import React from 'react'
import { View, Text } from 'react-native'
import { IconButton } from 'react-native-paper'

// Styles
import styles from './styles'

// Themes
import { COLORS, FONTS } from '../../themes'

type Props = {
  label?: string | number,
  onPress?: () => void,
  customStyle?: {},
  color?: string,
  size?: number,
  name: string,
  disabled?: boolean,
  wrapperIconStyle?: Object,
};

const Icon = ({
  label,
  onPress,
  customStyle,
  color,
  size,
  name,
  wrapperIconStyle,
  disabled,
}: Props) => (
  <View style={[
    styles.wrapIcon,
    wrapperIconStyle,
  ]}
  >
    <IconButton
      icon={name}
      color={color}
      size={size}
      onPress={onPress}
      disabled={disabled}
    />
    {label ? <Text style={[styles.label, customStyle]}>{label}</Text> : null}
  </View>
)

Icon.defaultProps = {
  label: '',
  onPress: () => {},
  customStyle: {},
  size: FONTS.fontSize.medium,
  color: COLORS.black,
  wrapperIconStyle: {},
  disabled: false,
};

export default Icon
