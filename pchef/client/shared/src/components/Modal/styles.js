// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS } from '../../themes'

const styles = StyleSheet.create({
  // Wrapper
  wrapper: {
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.blackLighter,
  },

  // Dialog
  // Width full container for small/medium dialog
  largeDialog: {
    width: METRICS.mediumContent,
    alignSelf: 'center',
  },
})

export default styles
