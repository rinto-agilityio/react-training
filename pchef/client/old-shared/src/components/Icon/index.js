// Libs
import React from 'react'
import { View, Text } from 'react-native'
import { Icon as IconComponent } from 'react-native-elements'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../themes'

type Props = {
  label?: string | number,
  onClick?: () => void,
  customStyle?: {},
  color?: string,
  type?: string,
  size?: number,
  name: string,
  disabled?: boolean,
  underlayColor?: string,
  wrapperIconStyle?: Object,
  disabledStyle?: {},
};

const Icon = ({
  label,
  onClick,
  customStyle,
  color,
  type,
  size,
  name,
  wrapperIconStyle,
  underlayColor,
  disabled,
  disabledStyle,
}: Props) => (
  <View style={[
    styles.wrapIcon,
    wrapperIconStyle,
  ]}
  >
    <IconComponent
      name={name}
      type={type}
      color={color}
      size={size}
      onPress={onClick}
      underlayColor={underlayColor}
      disabled={disabled}
      disabledStyle={disabledStyle}
    />
    {label ? <Text style={[styles.label, customStyle]}>{label}</Text> : null}
  </View>
)

Icon.defaultProps = {
  label: '',
  type: 'font-awesome',
  onClick: () => {},
  customStyle: {},
  size: METRICS.fontSize.medium,
  color: COLORS.black,
  wrapperIconStyle: {},
  underlayColor: '',
  disabled: false,
  disabledStyle: {},
};

export default Icon