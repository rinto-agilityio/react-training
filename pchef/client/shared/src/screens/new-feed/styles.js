// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

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
  wrapper: {
    zIndex: METRICS.iconZindex,
  },
})

export default styles
