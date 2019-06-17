// Libs
import React from 'react'
import { View, Text } from 'react-native'
import { RadioButton as RadioButtonComponent } from 'react-native-paper'

// Styles
import styles from './styles'

// Themes
import { COLORS } from '../../themes'

type Props = {
  onPress?: () => void,
  customStyle?: {} | Array<{}>,
  color?: string,
  value: string,
  disabled?: boolean,
  customWrapperStyle?: {} | Array<{}>,
  group: Array<{
    id: string,
    name: string,
  }>,
};

const RadioButton = ({
  onPress,
  customStyle,
  color,
  value,
  customWrapperStyle,
  disabled,
  group = [],
}: Props) => (
  <RadioButtonComponent.Group
    onValueChange={value => onPress(value)}
    value={value}
  >
    {group.map(item => (
      <View
        key={item.id}
        style={[
          styles.wrapper,
          customWrapperStyle,
        ]}
      >
        <RadioButtonComponent
          value={item.id}
          disabled={disabled}
          color={color}
        />
        {item.name ? <Text style={[styles.label, customStyle]}>{item.name}</Text> : null}
      </View>
    ))}
  </RadioButtonComponent.Group>
)

RadioButton.defaultProps = {
  onPress: () => {},
  customStyle: {},
  color: COLORS.black,
  customWrapperStyle: {},
  disabled: false,
};

export default RadioButton
