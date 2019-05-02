// Lib
import { StyleSheet } from 'react-native';

// Themes
import { COLORS, METRICS } from '../../../themes';

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
  small: {
    minHeight: 30,
    padding: METRICS.smallPadding,
  },
  medium: {
    minHeight: 40,
    padding: METRICS.mediumPadding,
  },
  large: {
    minHeight: 40,
    padding: METRICS.largePadding,
  },
});

export default styles;
