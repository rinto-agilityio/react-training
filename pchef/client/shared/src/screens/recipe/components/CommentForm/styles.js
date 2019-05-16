// Libs
import { StyleSheet } from 'react-native'

// Themes
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
    borderRadius: '50%',
    backgroundColor: COLORS.green,
  },
  primaryBadge: {
    right: METRICS.mediumBadge,
  },
  secondaryBadge: {
    right: METRICS.smallBadge,
  },
})
