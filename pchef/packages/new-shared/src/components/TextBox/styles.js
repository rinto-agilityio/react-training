// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../themes'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  default: {
    height: METRICS.mediumInput,
    borderColor: COLORS.grayDarker,
    borderBottomWidth: 1,
    fontSize: METRICS.fontSize.medium,
    color: COLORS.black,
    flex: 1,
  },
})

export default styles
