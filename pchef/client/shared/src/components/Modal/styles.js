// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../themes'

const styles = StyleSheet.create({
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
  titleModal: {
    marginLeft: METRICS.extraLargeMargin,
    fontWeight: 'bold',
  },
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
