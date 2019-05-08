// Libs
import * as React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  children: React.Node,
  direction?: string,
  childPosition?: string,
  customStyle?: Object,
  flexGrow?: number,
};

const Wrapper = ({ children, direction, childPosition, flexGrow, customStyle }: Props) => ( // eslint-disable-line
  <View
    style={[
      styles.container,
      styles[direction],
      styles[childPosition],
      customStyle,
      { flexGrow },
    ]}
  >
    {children}
  </View>
);

Wrapper.defaultProps = {
  direction: 'row',
  childPosition: 'spaceAround',
  flexGrow: 3,
  customStyle: {},
}

export default Wrapper
