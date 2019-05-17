// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../../../themes'

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
    fontSize: FONTS.fontSize.small,
  },
  secondaryInfor: {
    fontSize: FONTS.fontSize.base,
  },
  primaryContent: {
    fontSize: FONTS.fontSize.base,
    marginTop: METRICS.smallMargin,
  },
  secondaryContent: {
    fontSize: FONTS.fontSize.medium,
    marginTop: METRICS.mediumMargin,
  },
})
