// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../themes'

// Create style for Header
const styles = StyleSheet.create({
  profile: {
    width: '100%',
    backgroundColor: COLORS.white,
  },
  wrapper: {
    zIndex: METRICS.iconZindex,
  },
})

export default styles
