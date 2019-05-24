// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, COLORS } from '../../themes'

const styles = StyleSheet.create({
  // Wrapper
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: METRICS.modalZindex,
    backgroundColor: COLORS.lightBlack,
    ...METRICS.flexCenter,
  },
})

export default styles
