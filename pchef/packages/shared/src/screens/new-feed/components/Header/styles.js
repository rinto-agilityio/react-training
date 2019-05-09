// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  contentHeader: {
    backgroundColor: COLORS.black,
    width: '100%',
    alignItems: 'flex-start',
  },
  wrapIcon: {
    marginTop: METRICS.mediumMargin,
    marginLeft: METRICS.largeMargin,
  },
  text: {
    fontSize: METRICS.fontSize.extraLarge,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  image: {
    width: METRICS.extraSmallImage,
    height: METRICS.extraSmallImage,
  },
  largeImage: {
    width: METRICS.mediumImage,
    height: METRICS.mediumImage,
  },
  largeContent: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingRight: METRICS.extraLargePadding,
  },
})

export default styles
