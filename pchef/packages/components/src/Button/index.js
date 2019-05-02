// libs
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

// Styles
import styles from './styles';

const Button = ({
  onClick,
  customStyle,
  size,
  title,
}) => (
  <TouchableOpacity
    onPress={onClick}
    style={[
      customStyle,
      styles.button,
      styles[size]
    ]}
  >
    <Text
      style={styles.title}
    >
      {title}
    </Text>
  </TouchableOpacity>
)

export default Button

Button.defaultProps = {
  onClick: () => { },
  customStyle: {},
  size: 'default',
}
