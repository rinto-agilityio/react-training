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
    border: 0,
    borderColor: 'transparent',
    marginTop: METRICS.extraLargeMargin,
  },
  settingUrl: {
    fontSize: METRICS.fontSize.medium,
    borderBottomWidth: 1,
    marginBottom: METRICS.largeMargin,
  },
})

export default styles
