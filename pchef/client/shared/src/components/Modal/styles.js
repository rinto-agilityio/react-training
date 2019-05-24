// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../themes'

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

  // Title
  smallTitleModal: {
    fontSize: FONTS.fontSize.small,
  },
  mediumTitleModal: {
    fontSize: FONTS.fontSize.base,
  },
  largeTitleModal: {
    fontSize: FONTS.fontSize.medium,
  },
})

export default styles
