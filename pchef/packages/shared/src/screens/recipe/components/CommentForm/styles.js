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
    fontWeight: '400',
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
})
