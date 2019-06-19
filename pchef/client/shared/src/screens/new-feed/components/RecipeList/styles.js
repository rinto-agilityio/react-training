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
  tabWrap: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: METRICS.smallBorderWidth,
    borderColor: COLORS.baseGray,
    marginTop: METRICS.largeMargin,
    marginBottom: METRICS.largeMargin,
  },
  tab: {
    paddingTop: METRICS.mediumPadding,
    paddingRight: METRICS.largePadding,
    paddingBottom: METRICS.mediumPadding,
    paddingLeft: METRICS.largePadding,
    color: COLORS.white,
    textTransform: 'uppercase',
    borderWidth: METRICS.smallBorderWidth,
    borderTopLeftRadius: METRICS.mediumBorderRadius,
    borderTopRightRadius: METRICS.mediumBorderRadius,
  },
  tabViewActive: {
    backgroundColor: COLORS.red,
  },
  tabView: {
    backgroundColor: COLORS.baseGray,
  },
})

export default styles
