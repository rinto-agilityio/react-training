import { StyleSheet } from 'react-native';
import { METRICS } from '../../../../themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dash: {
    marginLeft: 5,
    marginRight: 5,
  },
  userAvatar: {
    marginRight: 10,
  },
  primaryAvatar: {
    width: 40,
    height: 40,
  },
  secondaryAvatar: {
    width: 100,
    height: 100,
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
    marginTop: 5,
  },
  secondaryContent: {
    fontSize: METRICS.fontSize.medium,
    marginTop: 10,
  },
});
