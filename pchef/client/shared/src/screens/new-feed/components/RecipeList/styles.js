// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  secondaryContainer: {
    flex: 1,
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
    marginBottom: METRICS.extraLargeMargin,
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
    backgroundColor: COLORS.tab.active,
  },
  tabView: {
    backgroundColor: COLORS.baseGray,
  },
  noRecipeMessage: {
    fontSize: 17,
    textAlign: 'center',
  },
})

export default styles
