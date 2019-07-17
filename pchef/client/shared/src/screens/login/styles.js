// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.login.bg,
    alignItems: 'center',
    position: 'relative',
  },
  secondaryContainer: {
    paddingTop: METRICS.padding.lg * 10,
  },
  text: {
    textAlign: 'center',
    marginTop: METRICS.margin.lg * 5,
    fontWeight: 'bold',
    fontSize: FONTS.fontSize.moreExtraLarge,
    color: COLORS.white,
  },
  error: {
    textAlign: 'center',
    fontSize: FONTS.fontSize.base,
    color: COLORS.login.errorText,
  },
  primaryError: {
    fontSize: FONTS.fontSize.small,
  },
  errorWrapper: {
    backgroundColor: COLORS.login.errorBg,
    paddingTop: METRICS.padding.sm + METRICS.padding.sm,
    paddingRight: METRICS.padding.sm,
    paddingBottom: METRICS.padding.sm + METRICS.padding.sm,
    paddingLeft: METRICS.padding.sm,
    position: 'absolute',
    borderRadius: METRICS.borderRadius.xs,
  },
  primaryErrorWrapper: {
    top: METRICS.margin.lg,
    width: METRICS.wrapper.lg,
  },
  secondaryErrorWrapper: {
    top: METRICS.margin.lg + METRICS.margin.xl,
    width: METRICS.wrapper.md * 2,
  },
})

export default styles
