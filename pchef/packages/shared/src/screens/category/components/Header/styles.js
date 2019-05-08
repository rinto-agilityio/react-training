// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Create style for header category
const styles = StyleSheet.create({
  wrapperHeader: {
    display: 'flex'
  },
  smallHeader: {
    height: 250
  },
  mediumHeader: {
    height: METRICS.largeWrapper
  },
  largeHeader: {
    height: METRICS.mediumContent
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: METRICS.smallMargin
  },
  smallTitle: {
    fontSize: METRICS.fontSize.medium
  },
  mediumTitle: {
    fontSize: METRICS.fontSize.large
  },
  largeTitle: {
    fontSize: METRICS.fontSize.extraLarge
  },
  button: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.white,
    backgroundColor: 'transparent',
    paddingTop: METRICS.smallPadding,
    paddingBottom: METRICS.smallPadding,
    paddingRight: METRICS.largePadding,
    paddingLeft: METRICS.largePadding
  },
  titleBtn: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: METRICS.fontSize.small
  },
  wrapperHeaderIcon: {
    backgroundColor: COLORS.lightBlue,
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    ...METRICS.flexCenter
  }
})

export default styles