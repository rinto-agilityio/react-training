// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../../../themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: METRICS.padding.sm,
    paddingRight: METRICS.padding.sm,
    paddingTop: METRICS.padding.sm,
    paddingBottom: METRICS.padding.sm,
  },
  dash: {
    marginLeft: METRICS.margin.sm,
    marginRight: METRICS.margin.sm,
  },
  userAvatar: {
    marginRight: METRICS.margin.md,
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
    marginTop: METRICS.margin.sm,
  },
  secondaryContent: {
    fontSize: FONTS.fontSize.medium,
    marginTop: METRICS.margin.md,
  },
})
