import { StyleSheet } from 'react-native'
import { METRICS, COLORS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  item: {
    margin: 1,
    position: 'relative',
  },
  layer: {
    position: 'absolute',
    backgroundColor: COLORS.black,
    zIndex: 1,
  },
  activeLayer: {
    opacity: METRICS.activeItem,
  },
  inactiveLayer: {
    opacity: METRICS.inactiveItem,
  },
  name: {
    position: 'absolute',
    fontWeight: 'bold',
    zIndex: 2,
  },
  activeName: {
    color: COLORS.white,
  },
  inactiveName: {
    color: COLORS.welcome.disableItem,
  },
  primaryName: {
    left: METRICS.smallMargin,
    top: 8,
    fontSize: FONTS.fontSize.base,
  },
  secondaryName: {
    left: METRICS.mediumMargin,
    top: METRICS.smallMargin + METRICS.mediumMargin,
    fontSize: FONTS.fontSize.large,
  },
})

export default styles
