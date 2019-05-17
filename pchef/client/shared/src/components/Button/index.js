// libs
import React from 'react'
import { Button as ButtonComponent, Text } from 'react-native-paper'

// Styles
import styles from './styles'
import { COLORS } from '../../themes/index'

type Props = {
  onPress?: () => void,
  buttonStyle?: {} | Array<{}>,
  title: string,
  titleStyle?: {} | Array<{}>,
  disabled?: boolean,
  mode?: string,
  contentStyle?: {} | Array<{}>,
  color?: string,
  loading?: boolean,
  type?: string,
}

const Button = ({
  onPress,
  buttonStyle,
  title,
  mode,
  type,
  disabled,
  contentStyle,
  color,
  loading,
  titleStyle,
}: Props) => (
  <ButtonComponent
    color={color}
    loading={loading}
    onPress={onPress}
    mode={mode}
    disabled={disabled}
    style={[styles.button, styles[type], buttonStyle]}
    contentStyle={[styles.content, contentStyle]}
  >
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </ButtonComponent>
)

Button.defaultProps = {
  onPress: () => {},
  buttonStyle: {},
  titleStyle: {},
  disabled: false,
  mode: 'contained',
  contentStyle: {},
  color: COLORS.baseBlue,
  loading: false,
  type: 'default',
}

export default Button
