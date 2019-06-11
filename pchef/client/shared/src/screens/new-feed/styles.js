// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS } from '../../themes'

// Create style for Header
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  secondaryRecipeListContainer: {
    width: METRICS.extraLargeScreen,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  tabListContainer: {},
  tabWrap: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: METRICS.smallBorderWidth,
    borderColor: COLORS.baseGray,
    margintop: METRICS.largeMargin,
  },
  tab: {
    borderWidth: 2,
    borderRadius: METRICS.largeBorderRadius,
    borderColor: COLORS.red,
    backgroundColor: 'green',
    paddingTop: METRICS.mediumPadding,
    paddingBottom: METRICS.mediumPadding,
    paddingRight: METRICS.mediumPadding,
    paddingLeft: METRICS.mediumPadding,
  },
})

export default styles
