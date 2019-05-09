// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },

  // Title
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    paddingLeft: METRICS.largePadding
  },
  smallTitle: {
    fontSize: METRICS.fontSize.medium
  },
  mediumTitle: {
    fontSize: METRICS.fontSize.large
  },
  largeTitle: {
    fontSize: METRICS.fontSize.xLarge
  },

  // Description
  description: {
    color: COLORS.baseGray,
    fontWeight: 'bold',
    paddingLeft: METRICS.largePadding
  },
  smallDescription: {
    fontSize: METRICS.fontSize.small
  },
  mediumDescription: {
    fontSize: METRICS.fontSize.medium
  },
  largeDescription: {
    fontSize: METRICS.fontSize.large
  },

  // Image
  image: {
    width: '100%',
    marginTop: METRICS.mediumMargin
  },
  smallImage: {
    height: 150
  },
  mediumImage: {
    height: 250
  },
  largeImage: {
    height: 300
  }
})

export default styles