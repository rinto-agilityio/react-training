// libs
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

// Styles
import styles from './styles';

const Button = (props) => (
  <TouchableOpacity
    onPress={props.onClick}
    style={[
      props.customStyle,
      styles.button,
      props.isWeb ? styles[`${props.size}Web`] : styles[`${props.size}Mobile`]
    ]}
  >
    <Text
      style={styles.title}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
)

export default Button
