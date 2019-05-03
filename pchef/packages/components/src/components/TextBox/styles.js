// Libs
import { StyleSheet } from 'react-native';

// Themes
import { COLORS, METRICS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  default: {
    height: 40,
    borderColor: COLORS.graySolid,
    borderBottomWidth: 1,
    fontSize: METRICS.fontSize.medium,
    flex: 1,
    color: COLORS.black
  },
});