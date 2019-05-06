// Lib
import { StyleSheet } from 'react-native';

// Themes
import { COLORS, METRICS } from '../../themes';

// Create style for button
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.green,
    padding: 10
  },
  title: {
    color: COLORS.white
  },
  small: {
    padding: METRICS.smallPadding
  },
  medium: {
    padding: METRICS.mediumPadding
  },
  large: {
    padding: METRICS.largePadding
  }
});

export default styles;
