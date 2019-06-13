// Libs
import * as React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  children: React.Node,
  type: string,
}

const MainContainer = ({ children, type }: Props) => (
  <View style={[type === 'web' ? styles.webContainer : styles.mobileContainer]}>
    { children }
  </View>
)

export default MainContainer
