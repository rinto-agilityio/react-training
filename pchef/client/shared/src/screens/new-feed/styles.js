// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

// Create style for Header
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  secondaryRecipeListContainer: {
    width: METRICS.extraLargeScreen,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
})

export default styles
