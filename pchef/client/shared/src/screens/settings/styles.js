// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  settingForm: {
    padding: METRICS.mediumPadding,
    width: '100%',
  },
  settingLabel: {
    color: COLORS.baseGray,
    marginTop: METRICS.mediumMargin,
  },
  wrapField: {
    width: '100%',
  },
  settingField: {
    height: METRICS.extraLargePadding,
    marginBottom: METRICS.extraLargeMargin,
    marginTop: METRICS.mediumMargin,
    borderColor: COLORS.border.default,
    borderBottomWidth: METRICS.smallBorderWidth,
    borderStyle: 'solid',
    fontSize: FONTS.fontSize.medium,
    color: COLORS.black,
  },
  settingButton: {
    backgroundColor: COLORS.button.danger,
    borderColor: 'transparent',
    marginTop: METRICS.extraLargeMargin,
  },
  settingUrl: {
    fontSize: FONTS.fontSize.medium,
    borderBottomWidth: METRICS.smallBorderWidth,
    marginBottom: METRICS.largeMargin,
  },
})

export default styles
