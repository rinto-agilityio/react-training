// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.mantisGreen,
    alignItems: 'center',
    position: 'relative',
  },
  secondaryContainer: {
    paddingTop: METRICS.largePadding * 10,
  },
  text: {
    textAlign: 'center',
    marginTop: METRICS.largeMargin * 5,
    fontWeight: 'bold',
    fontSize: FONTS.fontSize.moreExtraLarge,
    color: COLORS.white,
  },
  error: {
    textAlign: 'center',
    fontSize: FONTS.fontSize.base,
    color: COLORS.persianPlum,
  },
  primaryError: {
    fontSize: FONTS.fontSize.small,
  },
  errorWrapper: {
    backgroundColor: COLORS.cherub,
    paddingTop: METRICS.smallPadding + METRICS.mediumPadding,
    paddingRight: METRICS.smallPadding,
    paddingBottom: METRICS.smallPadding + METRICS.mediumPadding,
    paddingLeft: METRICS.smallPadding,
    position: 'absolute',
    borderRadius: METRICS.smallBorderRadius,
  },
  primaryErrorWrapper: {
    top: METRICS.largeMargin,
    width: METRICS.largeWrapper,
  },
  secondaryErrorWrapper: {
    top: METRICS.largeMargin + METRICS.extraLargeMargin,
    width: METRICS.mediumWrapper * 2,
  },
})

export default styles
