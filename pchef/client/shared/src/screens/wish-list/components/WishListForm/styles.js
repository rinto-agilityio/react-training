// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../../../themes'

const styles = StyleSheet.create({
  // Portal
  portal: {
    ...METRICS.flexCenter,
  },

  // Dialog
  dialog: {
    ...METRICS.flexCenter,
    width: METRICS.mediumContent,
  },

  // Content
  largeContent: {
    width: METRICS.mediumContent,
  },
})

export default styles
