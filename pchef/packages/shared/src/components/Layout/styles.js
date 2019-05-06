// Lib
import { StyleSheet } from 'react-native';

// Create style for button
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  left: {
    alignItems: 'flex-start',
    justifyContent: 'end',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'start',
  },
  fullSize: {
    width: '100%',
    backgroundColor: 'red'
  },
  halfSize: {
    width: '50%',
    backgroundColor: 'red'
  }
});

export default styles;
