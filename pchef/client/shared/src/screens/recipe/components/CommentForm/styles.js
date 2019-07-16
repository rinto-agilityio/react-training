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
    borderRadius: METRICS.borderRadius.md,
    height: METRICS.input.md,
    color: COLORS.black,
    paddingLeft: METRICS.padding.sm,
    paddingRight: METRICS.padding.sm,
  },
  primaryInput: {
    fontSize: FONTS.fontSize.base,
    marginLeft: METRICS.margin.sm,
  },
  secondaryInput: {
    fontSize: FONTS.fontSize.medium,
    marginLeft: METRICS.margin.md,
    paddingLeft: METRICS.padding.sm,
    paddingRight: METRICS.padding.sm,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    borderRadius: '50%',
    backgroundColor: COLORS.green,
  },
  primaryBadge: {
    right: METRICS.badge.md,
  },
  secondaryBadge: {
    right: METRICS.badge.sm,
  },
})
