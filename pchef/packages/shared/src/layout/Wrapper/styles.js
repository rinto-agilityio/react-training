// Lib
import { StyleSheet } from 'react-native'

// Create style for layout
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'flex-end',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
})

export default styles
