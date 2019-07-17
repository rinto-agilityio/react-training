// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../themes'

// Create style for Header
const styles = StyleSheet.create({
  wrapHeader: {
    backgroundColor: COLORS.black,
  },
  wrapHeaderContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapUserInfo: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  createRecipeBtn: {
    marginRight: METRICS.margin.lg,
  },
  avataDropdown: {
    left: METRICS.position.xl,
    top: METRICS.position.lg,
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
  primaryContainer: {
    alignItems: 'flex-start',
    paddingBottom: METRICS.padding.lg,
    paddingTop: METRICS.padding.lg,
    paddingLeft: METRICS.padding.lg + METRICS.padding.md,
  },
  secondaryContainer: {
    paddingLeft: METRICS.padding.lg * 2 + METRICS.padding.md,
    paddingRight: METRICS.padding.lg * 2 + METRICS.padding.md,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryWrapIcon: {
    marginTop: METRICS.margin.md,
    marginLeft: METRICS.margin.lg,
    marginBottom: METRICS.margin.md,
  },

  text: {
    fontSize: FONTS.fontSize.extraLarge,
    color: COLORS.white,
    fontWeight: FONTS.fontWeight.large,
  },
  image: {
    width: METRICS.image.sm / 2,
    height: METRICS.image.sm / 2,
  },
  secondaryImage: {
    width: METRICS.image.md / 2,
    height: METRICS.image.md / 2,
  },
  secondaryContent: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingRight: METRICS.padding.xl,
  },
  imageWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: METRICS.margin.sm,
    width: METRICS.image.xs,
    height: METRICS.image.xs,
    borderRadius: METRICS.borderRadius.md + METRICS.borderRadius.lg,
  },
  primaryImageWrapper: {
    marginLeft: METRICS.margin.md,
  },
  secondaryImageWrapper: {
    marginTop: METRICS.margin.lg,
    marginBottom: METRICS.margin.lg,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default styles
