// Libs
import { StyleSheet } from 'react-native';

// Themes
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  default: {
    height: 40,
    borderColor: COLORS.inputBorder,
    borderBottomWidth: 1,
    fontSize: 18,
    flex: 1,
    color: COLORS.black
  },
});