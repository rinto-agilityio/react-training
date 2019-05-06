import * as React from 'react';
import { View } from 'react-native';

// Styles
import styles from './styles';

type Props = {
  children?: React.Node,
  direction?: string,
  childPosition?: string,
  flexGrow?: number,
};

const Layout = ({ children, direction, childPosition, flexGrow }: Props) => {
  return (
    <View 
    style={[
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

export default Layout;
