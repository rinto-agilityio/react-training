/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const Counting = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counting;
