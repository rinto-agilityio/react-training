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
      METRICS.screen.width > METRICS.screen.md
        ? METRICS.screen.xl
        : METRICS.screen.width,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contentHeader: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',

    height: METRICS.bgImage.sm,
    paddingHorizontal: METRICS.padding.lg,
  },
  image: {
    width: METRICS.image.sm,
    height: METRICS.image.sm,
    borderWidth: METRICS.borderWidth.md,
    borderColor: COLORS.white,
    borderRadius: METRICS.image.sm / 2,
    marginBottom: -METRICS.margin.md,
  },
  largeImage: {
    width: METRICS.image.lg,
    height: METRICS.image.lg,
  },
  largeContent: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingRight: METRICS.padding.xl,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: METRICS.padding.lg,
    backgroundColor: COLORS.white,
    zIndex: -1,
  },
  userName: {
    fontSize: FONTS.fontSize.large,
    fontWeight: FONTS.fontWeight.large,
  },
  userButton: {
    backgroundColor: COLORS.white,
    borderWidth: METRICS.borderWidth.sm,
    borderColor: COLORS.black,
    borderRadius: METRICS.borderRadius.lg,
    padding: 0,
  },
  userTitleButton: {
    color: COLORS.black,
    textTransform: 'none',
  },
})

export default styles
