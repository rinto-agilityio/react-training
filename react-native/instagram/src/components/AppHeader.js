import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles/AppHeader';

const AppHeader = () => (
  <View style={styles.wrapper}>
    <Text style={styles.brand}>Instagram</Text>
  </View>
);

export default AppHeader;
