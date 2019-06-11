// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  primaryContainer: {
    paddingTop: METRICS.extraLargePadding,
  },
  secondaryContainer: {
    paddingTop: METRICS.extraLargePadding + METRICS.largePadding,
    maxWidth: METRICS.extraLargeScreen,
    width: '100%',
    margin: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  indicator: {
    marginTop: METRICS.largeMargin * 10,
  },
  tabListContainer: {},
  tabWrap: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: METRICS.smallBorderWidth,
    borderColor: COLORS.baseGray,
    marginTop: METRICS.largeMargin,
  },
  tab: {
    borderWidth: 2,
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'inline-block',
  },
  tabViewActive: {
    backgroundColor: COLORS.red,
  },
  tabView: {
    backgroundColor: COLORS.baseGray,
  },
})

export default styles
