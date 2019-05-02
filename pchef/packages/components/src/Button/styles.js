// Lib
import { StyleSheet } from 'react-native';

// Themes
import COLORS from '../../../themes/Colors';

// Create style for button
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.green,
    padding: 10
  },
  title: {
    color: COLORS.white,
  },
  default: {
    width: 'auto',
  },
  small: {
    width: 100,
    height: 40,
  },
  medium: {
    width: 200,
    height: 40,
  },
});

export default styles;
