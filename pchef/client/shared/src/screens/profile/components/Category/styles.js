// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: METRICS.extraLargeMargin,
  },
  title: {
    fontWeight: FONTS.fontWeight.medium,
    fontSize: FONTS.fontSize.large,
    marginBottom: METRICS.mediumMargin,
  },
  image: {
    width: '100%',
    height: METRICS.mediumBgImage,
  },
})

export default styles
