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
    width: METRICS.largeWrapper,
    paddingTop: METRICS.largePadding * 2,
    paddingRight: METRICS.extraLargePadding,
    paddingBottom: METRICS.smallPadding + METRICS.largePadding,
    paddingLeft: METRICS.extraLargePadding,
    marginTop: METRICS.largeMargin * 2,
  },
  secondaryContainer: {
    width: METRICS.mediumWrapper * 2,
    paddingTop: METRICS.extraLargePadding * 2,
    paddingRight: METRICS.extraLargePadding + METRICS.largePadding,
    paddingBottom: METRICS.largePadding * 2 + METRICS.smallPadding,
    paddingLeft: METRICS.extraLargePadding + METRICS.largePadding,
  },
  formGroup: {
    borderRadius: METRICS.baseBorderRadius,
    marginBottom: METRICS.smallMargin + METRICS.mediumMargin,
    borderColor: COLORS.ghost,
    borderWidth: METRICS.smallBorderWidth,
    width: '100%',
  },
  errorFormGroup: {
    borderColor: COLORS.baseRed,
  },
  input: {
    borderRadius: METRICS.baseBorderRadius,
    borderBottomWidth: 0,
    paddingLeft: METRICS.smallPadding + METRICS.mediumPadding,
    paddingRight: METRICS.smallPadding + METRICS.mediumPadding,
  },
  primaryInput: {
    fontSize: FONTS.fontSize.base,
  },
  buttonWrapper: {
    borderRadius: METRICS.baseBorderRadius,
    padding: 0,
  },
  button: {
    height: METRICS.mediumHeight,
    borderRadius: METRICS.baseBorderRadius,
    backgroundColor: COLORS.mantisGreen,
  },
  primaryButton: {
    width: METRICS.largeButton,
  },
  secondaryButton: {
    width: METRICS.largeWrapper,
  },
})

export default styles
