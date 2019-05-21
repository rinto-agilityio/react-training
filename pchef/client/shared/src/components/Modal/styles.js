// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

const styles = StyleSheet.create({
  // Wrapper
  wrapper: {
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: METRICS.modalZindex,
  },

  // Dialog
  // Width full container for small/medium dialog
  largeDialog: {
    width: METRICS.mediumContent,
    alignSelf: 'center',
  },

  // Button
  btnModal: {
    marginRight: METRICS.mediumMargin,
  },
})

export default styles
