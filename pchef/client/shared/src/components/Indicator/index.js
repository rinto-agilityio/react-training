// Libs
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

// Themes
import { COLORS } from '../../themes'

// Styles
import styles from './styles'

type Props = {
  size: string,
}

const Indicator = ({
  size = 'small',
}: Props) => (
  <View style={styles.wrapper}>
    <ActivityIndicator size={size} color={COLORS.baseGray} />
  </View>
)

export default Indicator
