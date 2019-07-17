// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  primaryContainer: {
    width: METRICS.wrapper.lg,
    paddingTop: METRICS.padding.lg * 2,
    paddingRight: METRICS.padding.xl,
    paddingBottom: METRICS.padding.sm + METRICS.padding.lg,
    paddingLeft: METRICS.padding.xl,
    marginTop: METRICS.margin.lg * 2,
  },
  secondaryContainer: {
    width: METRICS.wrapper.md * 2,
    paddingTop: METRICS.padding.xl * 2,
    paddingRight: METRICS.padding.xl + METRICS.padding.lg,
    paddingBottom: METRICS.padding.lg * 2 + METRICS.padding.sm,
    paddingLeft: METRICS.padding.xl + METRICS.padding.lg,
  },
  formGroup: {
    borderColor: COLORS.login.border,
    borderRadius: METRICS.borderRadius.sm,
    marginBottom: METRICS.margin.sm + METRICS.margin.md,
    borderWidth: METRICS.borderWidth.sm,
    width: '100%',
  },
  errorFormGroup: {
    borderColor: COLORS.login.errorBorder,
  },
  input: {
    borderRadius: METRICS.borderRadius.sm,
    borderBottomWidth: 0,
    paddingLeft: METRICS.padding.sm + METRICS.padding.sm,
    paddingRight: METRICS.padding.sm + METRICS.padding.sm,
  },
  primaryInput: {
    fontSize: FONTS.fontSize.base,
  },
  buttonWrapper: {
    borderRadius: METRICS.borderRadius.sm,
    padding: 0,
  },
  button: {
    backgroundColor: COLORS.login.button,
    height: METRICS.height.md,
    borderRadius: METRICS.borderRadius.sm,
  },
  primaryButton: {
    width: METRICS.button.lg,
  },
  secondaryButton: {
    width: METRICS.wrapper.lg,
  },
})

export default styles
