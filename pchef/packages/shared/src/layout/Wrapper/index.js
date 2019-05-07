// Libs
import * as React from 'react';
import { View } from 'react-native';

// Styles
import styles from './styles';

type Props = {
  children: React.Node,
  direction?: string,
  childPosition?: string,
  flexGrow?: number,
  customStyles?: Object
};

const Wrapper = ({
  children,
  direction,
  childPosition,
  flexGrow,
  customStyles
}: Props) => {
  return (
    <View
    style={[
      customStyles,
      styles.container,
      styles[direction],
      styles[childPosition],
      {flexGrow: flexGrow}
    ]}
    >
      {children}
    </View>
  );
};

Wrapper.defaultProps = {
  direction: '',
  childPosition: '',
  flexGrow: 0,
  customStyles: {},
};

export default Wrapper;
