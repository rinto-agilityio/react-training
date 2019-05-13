// Libs
import * as React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  children: React.Node,
  direction?: string,
  childPosition?: string,
  flexGrow?: number,
  customStyles?: {} | Array<{}>,
}

const Wrapper = ({
  children,
  direction,
  childPosition,
  flexGrow,
  customStyles,
}: Props) => (
  <View
    style={[
      styles.container,
      styles[direction],
      styles[childPosition],
      customStyles,
      { flexGrow },
    ]}
  >
    {children}
  </View>
)

Wrapper.defaultProps = {
  direction: 'row',
  childPosition: 'spaceAround',
  flexGrow: 0,
  customStyles: {},
}

export default Wrapper
