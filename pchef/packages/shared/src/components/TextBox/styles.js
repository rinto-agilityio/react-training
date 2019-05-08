// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  default: {
    height: METRICS.mediumInput,
    borderColor: COLORS.grayDarker,
    borderBottomWidth: 1,
    fontSize: METRICS.fontSize.medium,
    color: COLORS.black,
  },
});
