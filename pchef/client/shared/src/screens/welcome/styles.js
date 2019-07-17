import { StyleSheet } from 'react-native'
import { METRICS, COLORS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    paddingTop: 80,
  },
  secondaryContainer: {
    paddingTop: 100,
  },
  button: {
    position: 'absolute',
  },
  primaryButton: {
    top: METRICS.margin.lg,
    right: METRICS.margin.md + METRICS.margin.sm,
  },
  secondaryButton: {
    top: METRICS.margin.xl,
    right: METRICS.margin.lg,
  },
  next: {
    fontWeight: FONTS.fontWeight.large,
    color: 'gray',
  },
  primaryNext: {
    fontSize: FONTS.fontSize.medium,
  },
  secondaryNext: {
    fontSize: FONTS.fontSize.large,
  },
  disabledNext: {
    opacity: METRICS.layer.inactive,
  },
  description: {
    fontWeight: FONTS.fontWeight.medium,
    textAlign: 'center',
  },
  primaryDescription: {
    fontSize: FONTS.fontSize.large,
  },
  secondaryDescription: {
    fontSize: FONTS.fontSize.extraLarge,
  },
  content: {
    textAlign: 'center',
  },
  primaryContent: {
    fontSize: FONTS.fontSize.base,
    marginTop: METRICS.margin.sm,
  },
  secondaryContent: {
    marginTop: METRICS.margin.md,
    fontSize: FONTS.fontSize.base,
  },
  introduction: {
    color: COLORS.welcome.text,
    textAlign: 'center',
    fontWeight: FONTS.fontWeight.large,
    marginTop: METRICS.margin.md + METRICS.margin.sm,
  },
  primaryIntroduction: {
    fontSize: FONTS.fontSize.medium,
  },
  secondaryIntroduction: {
    marginTop: METRICS.margin.lg,
    fontSize: FONTS.fontSize.large,
  },
  divider: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  primaryDivider: {
    width: 80,
    height: 4,
    marginTop: METRICS.margin.lg,
    marginBottom: METRICS.margin.lg,
  },
  secondaryDivider: {
    width: 120,
    height: 6,
    marginTop: METRICS.margin.xl,
    marginBottom: METRICS.margin.xl,
  },
  categoryWrapper: {
    maxWidth: METRICS.content.lg,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  saveCategoryBtn: {
    width: METRICS.wrapper.md,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: METRICS.margin.lg,
  },
})

export default styles
