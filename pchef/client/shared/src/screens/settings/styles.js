// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  settingForm: {
    padding: METRICS.padding.sm,
    width: '100%',
  },
  settingLabel: {
    color: COLORS.baseGray,
    marginTop: METRICS.margin.md,
  },
  wrapField: {
    width: '100%',
  },
  settingField: {
    height: METRICS.padding.xl,
    marginBottom: METRICS.margin.xl,
    marginTop: METRICS.margin.md,
    borderColor: COLORS.grayDarker,
    borderBottomWidth: METRICS.smallBorderWidth,
    borderStyle: 'solid',
    fontSize: FONTS.fontSize.medium,
    color: COLORS.black,
  },
  settingButton: {
    backgroundColor: COLORS.red,
    borderColor: 'transparent',
    marginTop: METRICS.margin.xl,
  },
  settingUrl: {
    fontSize: FONTS.fontSize.medium,
    borderBottomWidth: METRICS.smallBorderWidth,
    marginBottom: METRICS.margin.lg,
  },
})

export default styles
