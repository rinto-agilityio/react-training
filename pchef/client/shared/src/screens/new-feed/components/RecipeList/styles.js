// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  secondaryContainer: {
    flex: 1,
    paddingTop: METRICS.padding.xl + METRICS.padding.lg,
    maxWidth: METRICS.screen.xl,
    width: '100%',
    margin: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  indicator: {
    marginTop: METRICS.margin.lg * 10,
  },
  tabWrap: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: METRICS.borderWidth.sm,
    borderColor: COLORS.baseGray,
    marginTop: METRICS.margin.lg,
    marginBottom: METRICS.margin.xl,
  },
  tab: {
    paddingTop: METRICS.padding.sm,
    paddingRight: METRICS.padding.lg,
    paddingBottom: METRICS.padding.sm,
    paddingLeft: METRICS.padding.lg,
    color: COLORS.white,
    textTransform: 'uppercase',
    borderWidth: METRICS.borderWidth.sm,
    borderTopLeftRadius: METRICS.borderRadius.md,
    borderTopRightRadius: METRICS.borderRadius.md,
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
