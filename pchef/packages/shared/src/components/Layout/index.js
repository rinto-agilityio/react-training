import * as React from 'react';
import { View } from 'react-native';

// Styles
import styles from './styles';

type Props = {
  children?: React.Node,
  type?: string,
  position?: string,
  flexGrow?: number,
};

const Layout = ({ children, type, position, flexGrow }: Props) => {
  return (
    <View 
    style={[
      styles.container,
      styles[type],
      styles[position],
      {flexGrow: flexGrow} 
    ]} 
    >
      {children}    
    </View>
  );
};

export default Layout;
