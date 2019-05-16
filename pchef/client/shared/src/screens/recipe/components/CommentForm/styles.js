import { StyleSheet } from 'react-native'
import { METRICS, COLORS, FONTS } from '../../../../themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    borderBottomWidth: 0,
    borderRadius: METRICS.mediumBorderRadius,
    height: METRICS.mediumInput,
    color: COLORS.black,
    paddingLeft: METRICS.smallPadding,
    paddingRight: METRICS.smallPadding,
  },
  primaryInput: {
    fontSize: FONTS.fontSize.base,
    marginLeft: METRICS.smallMargin,
  },
  secondaryInput: {
    fontSize: FONTS.fontSize.medium,
    marginLeft: METRICS.mediumMargin,
    paddingLeft: METRICS.smallPadding,
    paddingRight: METRICS.smallPadding,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
  primaryBadge: {
    width: METRICS.mediumBadge,
    height: METRICS.mediumBadge,
    borderRadius: METRICS.smallBorderRadius,
  },
  secondaryBadge: {
    width: METRICS.largeBadge,
    height: METRICS.largeBadge,
    borderRadius: METRICS.mediumBorderRadius,
  },
})
