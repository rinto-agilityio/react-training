// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
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