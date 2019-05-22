// Libs
import React from 'react'
import { View, Text } from 'react-native'
import { RadioButton as RadioButtonComponent } from 'react-native-paper'

// Styles
import styles from './styles'

// Themes
import { COLORS } from '../../themes'

type Props = {
  label?: string | number,
  onPress?: () => void,
  customStyle?: {} | Array<{}>,
  color?: string,
  status?: boolean,
  value: string,
  disabled?: boolean,
  customWrapperStyle?: {} | Arary<{}>,
};

const RadioButton = ({
  label,
  onPress,
  customStyle,
  color,
  status,
  value,
  customWrapperStyle,
  disabled,
}: Props) => (
  <View style={[
    styles.wrapper,
    customWrapperStyle,
  ]}
  >
    <RadioButtonComponent
      value={value}
      onPress={onPress}
      status={status ? 'checked' : 'unchecked'}
      disabled={disabled}
      color={color}
    />
    {label ? <Text style={[styles.label, customStyle]}>{label}</Text> : null}
  </View>
)

RadioButton.defaultProps = {
  label: '',
  onPress: () => {},
  customStyle: {},
  status: false,
  color: COLORS.black,
  customWrapperStyle: {},
  disabled: false,
};

export default RadioButton
