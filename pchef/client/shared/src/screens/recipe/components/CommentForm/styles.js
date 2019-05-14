import { StyleSheet } from 'react-native'
import { METRICS, COLORS } from '../../../../themes'

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
    fontSize: METRICS.fontSize.base,
    marginLeft: METRICS.smallMargin,
  },
  secondaryInput: {
    fontSize: METRICS.fontSize.medium,
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
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  secondaryBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
})
