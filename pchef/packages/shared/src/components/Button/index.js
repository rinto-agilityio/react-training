// libs
import React from 'react'
import { Button as ButtonComponent } from 'react-native-elements'

// Styles
import styles from './styles'

type Props = {
  onClick?: () => void,
  buttonStyle?: Object,
  typeName?: string,
  title: string,
  titleStyle?: Object,
  size?: string,
  disabled?: boolean,
}

const Button = ({
  onClick,
  buttonStyle,
  typeName,
  title,
  titleStyle,
  size,
  disabled,
}: Props) => (
  <ButtonComponent
    title={title}
    type={typeName}
    buttonStyle={[styles.button, styles[size], buttonStyle]}
    titleStyle={[styles.title, titleStyle]}
    onPress={onClick}
    disabled={disabled}
  />
)

Button.defaultProps = {
  onClick: () => {},
  buttonStyle: {},
  titleStyle: {},
  typeName: 'outline',
  size: 'medium',
  disabled: false,
}

export default Button
