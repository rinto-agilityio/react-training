// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  container: {
    height: METRICS.screenHeight - 370,
    marginBottom: 100,
    width: '100%',
  },
  tabContentItem: {
    width:
      METRICS.screenWidth > METRICS.mediumScreen
        ? METRICS.smallPercentItem
        : '100%',
    paddingLeft: METRICS.smallPadding,
    paddingRight: METRICS.smallPadding,
  },
})

export default styles
