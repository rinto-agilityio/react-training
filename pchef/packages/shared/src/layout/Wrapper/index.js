// Libs
import * as React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  children: React.Node,
  direction?: string,
  childPosition?: string,
  flexGrow?: number
}

const Wrapper = ({ children, direction, childPosition, flexGrow }: Props) => (
  <View
    style={[
      styles.container,
      styles[direction],
      styles[childPosition],
      { flexGrow }
    ]}
  >
    {children}
  </View>
)

Wrapper.defaultProps = {
  direction: 'row',
  childPosition: 'spaceAround',
  flexGrow: 3
}

export default Wrapper
