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
    borderColor: COLORS.border.default,
    height: METRICS.padding.xl,
    marginBottom: METRICS.margin.xl,
    marginTop: METRICS.margin.md,
    borderBottomWidth: METRICS.borderWidth.sm,
    borderStyle: 'solid',
    fontSize: FONTS.fontSize.medium,
    color: COLORS.black,
  },
  settingButton: {
    backgroundColor: COLORS.button.danger,
    borderColor: 'transparent',
    marginTop: METRICS.margin.xl,
  },
  settingUrl: {
    fontSize: FONTS.fontSize.medium,
    borderBottomWidth: METRICS.borderWidth.sm,
    marginBottom: METRICS.margin.lg,
  },
})

export default styles
