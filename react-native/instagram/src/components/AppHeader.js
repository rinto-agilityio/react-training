import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles/AppHeader';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.brand}>Instagram</Text>
      </View>
    );
  }
}
