// libs
import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

// Styles
import styles from './styles';

// [TODO] will replace to icon after config success
const Icon = ({ label, onClick, customStyle }) => (
  <View style={styles.wrapIcon}>
    <TouchableOpacity onPress={onClick}>
      <Image
        style={{ width: 20, height: 20 }}
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
    </TouchableOpacity>
    {
      label ? (
        <Text
          style={[
            customStyle,
            styles.label,
          ]}
        >
          {label}
        </Text>
      ) : null
    }
  </View>
);

export default Icon

Icon.defaultProps = {
  label: '',
  onClick: () => {},
  customStyle: {},
};
