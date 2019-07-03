// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'

// Components
import { View, TouchableWithoutFeedback, Text } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  totalOfItem: number,
  name: string,
  active: boolean,
  handlePressTab: () => void,
}

const TabHeaderItem = ({
  totalOfItem,
  name,
  handlePressTab,
  active,
}: Props) => (
  <TouchableWithoutFeedback onPress={handlePressTab}>
    <View style={[styles.tabItem, active && styles.active]}>
      <Text style={styles.tabText}>{totalOfItem}</Text>
      <Text style={styles.tabText}>{name}</Text>
    </View>
  </TouchableWithoutFeedback>
)

export default memo<Props>(TabHeaderItem)
