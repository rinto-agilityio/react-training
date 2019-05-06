// libs
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  width: number,
  height: number,
  children: React$Element<any>,
  customStyle: Object
};

const Wrapper = ({
  width,
  height,
  children,
  customStyle
}: Props) => (
  <View style={[
    {
      width: width,
      height: height,
    },
    customStyle
  ]}>
    {children}
  </View>
);

export default Wrapper;

Wrapper.defaultProps = {
  width: 200,
  height: 200,
  customStyle: {}
};
