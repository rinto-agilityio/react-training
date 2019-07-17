// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  container: {
    height: METRICS.screen.height - 370,
    marginBottom: 100,
    width: '100%',
  },
  tabContentItem: {
    width:
      METRICS.screen.width > METRICS.screen.md
        ? METRICS.item.sm
        : '100%',
    paddingLeft: METRICS.padding.sm,
    paddingRight: METRICS.padding.sm,
  },
})

export default styles
