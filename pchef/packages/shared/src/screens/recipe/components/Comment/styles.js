import { StyleSheet } from 'react-native'
import { METRICS } from '../../../../themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: METRICS.mediumPadding,
    paddingRight: METRICS.mediumPadding,
    paddingTop: METRICS.mediumPadding,
    paddingBottom: METRICS.mediumPadding,
  },
  dash: {
    marginLeft: METRICS.smallMargin,
    marginRight: METRICS.smallMargin,
  },
  userAvatar: {
    marginRight: METRICS.mediumMargin,
  },
  commentWrapper: {
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
  },
  primaryInfor: {
    fontSize: METRICS.fontSize.small,
  },
  secondaryInfor: {
    fontSize: METRICS.fontSize.base,
  },
  primaryContent: {
    fontSize: METRICS.fontSize.base,
    marginTop: METRICS.smallMargin,
  },
  secondaryContent: {
    fontSize: METRICS.fontSize.medium,
    marginTop: METRICS.mediumMargin,
  },
});
