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
  onPress?: () => void | Promise<void>,
  customStyle?: {} | Array<{}>,
  color?: string,
  size?: number,
  name: string,
  disabled?: boolean,
  wrapperIconStyle?: Object,
  customIconStyles?: {},
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
  customIconStyles,
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
      style={[styles.iconStyles, customIconStyles]}
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
  customIconStyles: {},
};

export default Icon
