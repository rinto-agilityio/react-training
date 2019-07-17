// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

const { screen } = METRICS

// Create style for Header
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  wrapTabs: {
    maxWidth:
      screen.width > METRICS.screen.md
        ? METRICS.screen.xl
        : screen.width,
    width: '100%',
    flexDirection: 'row',
    padding: METRICS.padding.lg,
    paddingBottom: 0,
    backgroundColor: COLORS.white,
  },
  wrapContent: {
    maxWidth:
      screen.width > METRICS.screen.md
        ? METRICS.screen.xl
        : screen.width,
    width: '100%',
    backgroundColor: COLORS.tab.bg,
    padding: METRICS.padding.lg,
    flexDirection: screen.width > METRICS.screen.md ? 'row' : 'column',
    flexWrap: screen.width > METRICS.screen.md ? 'wrap' : 'nowrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: METRICS.screen.height - METRICS.header.sm,
  },
})

export default styles
