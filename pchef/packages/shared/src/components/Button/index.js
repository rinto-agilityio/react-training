// libs
import React from 'react';
import { Button as ButtonComponent } from 'react-native-elements'

// Styles
import styles from './styles';

type Props = {
  onClick?: Function,
  buttonStyle?: Object,
  type?: string,
  title: string,
  titleStyle?: Object,
  size?: string,
}

const Button = ({
  onClick,
  buttonStyle,
  type,
  title,
  titleStyle,
  size,
}: Props) => (
    <ButtonComponent
      title={title}
      type={type}
      buttonStyle={[
        buttonStyle,
        styles.button,
        styles[size]
      ]}
      titleStyle={[
        titleStyle,
        styles.title
      ]}
      onPress={onClick}
    />
  )

export default Button

Button.defaultProps = {
  onClick: () => {},
  buttonStyle: {},
  titleStyle: {},
  type: 'outline',
  size: 'medium'
}
