// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../themes'

const styles = StyleSheet.create({
  settingForm: {
    padding: METRICS.mediumPadding,
  },
  settingLabel: {
    color: COLORS.baseGray,
  },
  settingInput: {
    marginBottom: METRICS.largeMargin,
  },
  settingButton: {
    backgroundColor: COLORS.red,
    borderColor: 'transparent',
    marginTop: METRICS.extraLargeMargin,
  },
  settingUrl: {
    fontSize: METRICS.fontSize.medium,
    borderBottomWidth: METRICS.borderWidthBase,
    marginBottom: METRICS.largeMargin,
  },
})

export default styles
