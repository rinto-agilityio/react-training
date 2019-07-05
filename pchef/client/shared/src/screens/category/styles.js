// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

// Create style for header category
const styles = StyleSheet.create({
  container: {
    marginTop: METRICS.largeMargin,
    marginRight: 'auto',
    marginBottom: METRICS.largeMargin,
    marginLeft: 'auto',
    position: 'relative',
    width: '100%',
    height: METRICS.screenHeight - 440, // 440 is space of top screen to list recipes
  },
})

export default styles
