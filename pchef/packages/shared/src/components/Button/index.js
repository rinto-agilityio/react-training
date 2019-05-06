// libs
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// Styles
import styles from './styles';

type Props = {
  onClick?: () => void,
  customStyle?: {},
  size?: string,
  title: string
};

const Button = ({ onClick, customStyle, size, title }: Props) => (
  <TouchableOpacity
    onPress={onClick}
    style={[customStyle, styles.button, styles[size]]}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

Button.defaultProps = {
  onClick: () => {},
  customStyle: {},
  size: 'medium'
};
