// Lib
import { StyleSheet } from 'react-native';

// Create style for button
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'red'
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  left: {
    alignItems: 'flex-start',
    justifyContent: 'end'
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'start'
  },
  fullSize: {
    flex: 1
  },
  halfSize: {
    width: '50%'
  },
  oneThirdSize: {
    width: '30%'
  },
  aQuarterSize: {
    width: '25%'
  }
});

export default styles;
