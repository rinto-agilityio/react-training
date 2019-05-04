// Lib
import { StyleSheet } from 'react-native';

// Create style for button
const styles = StyleSheet.create({
  flex: {
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

  fullSize: {
    width: '100%'
  },
  halfSize: {
    width: '50%'
  }
});

export default styles;
