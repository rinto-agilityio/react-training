import * as React from 'react';
import { View } from 'react-native';

// Styles
import styles from './styles';

type Props = {
  children?: React.Node,
  type?: string,
  size?: string,
  position?: string,
};

const Layout = ({ children, type, size, position }: Props) => {
  return (
    <View style={[
      styles.container,
      styles[type],
      styles[size],
      styles[position]
    ]}>
      {children}    
    </View>
  );
};

export default Layout;
