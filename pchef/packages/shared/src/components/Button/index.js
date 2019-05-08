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
  size?: string
}

const Button = ({
  onClick,
  buttonStyle,
  typeName,
  title,
  titleStyle,
  size,
}: Props) => (
  <ButtonComponent
    title={title}
    type={typeName}
    buttonStyle={[styles.button, styles[size], buttonStyle]}
    titleStyle={[titleStyle, styles.title]}
    onPress={onClick}
  />
)

Button.defaultProps = {
  onClick: () => {},
  buttonStyle: {},
  titleStyle: {},
  typeName: 'outline',
  size: 'medium',
}

export default Button
