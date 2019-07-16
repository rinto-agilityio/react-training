// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  // Dialog
  // Width full container for small/medium dialog
  largeDialog: {
    width: METRICS.content.md,
    alignSelf: 'center',
    margin: 'auto',
  },

  // Button
  btnModal: {
    marginRight: METRICS.margin.md,
  },

  // Title
  titleModal: {
    marginLeft: METRICS.margin.xl,
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
  dialog: {
    justifyContent: 'flex-start',
  },
})

export default styles
