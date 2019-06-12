// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  wrapHeader: {
    backgroundColor: COLORS.black,
    opacity: 0.8,
  },
  container: {
    maxWidth:
      METRICS.screenWidth > METRICS.mediumScreen
        ? METRICS.extraLargeScreen
        : METRICS.screenWidth,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contentHeader: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',

    height: METRICS.smallBgImage,
    paddingHorizontal: METRICS.largePadding,
  },
  image: {
    width: METRICS.extraSmallImage,
    height: METRICS.extraSmallImage,
    borderWidth: METRICS.mediumBorderWidth,
    borderColor: COLORS.white,
    borderRadius: METRICS.extraSmallImage / 2,
    marginBottom: -METRICS.mediumMargin,
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
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: METRICS.largePadding,
    backgroundColor: COLORS.white,
    zIndex: -1,
  },
  userName: {
    fontSize: FONTS.fontSize.large,
    fontWeight: FONTS.fontWeight.large,
  },
  userButton: {
    backgroundColor: COLORS.white,
    borderWidth: METRICS.smallBorderWidth,
    borderColor: COLORS.black,
    borderRadius: METRICS.largeBorderRadius,
    padding: 0,
  },
  userTitleButton: {
    color: COLORS.black,
    textTransform: 'none',
  },
})

export default styles
