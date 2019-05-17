// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

// Create style for layout
const styles = StyleSheet.create({
  container: {
    ...METRICS.flexCenter,
    display: 'flex',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  left: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  middle: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
})

export default styles
