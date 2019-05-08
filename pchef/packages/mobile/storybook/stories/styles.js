import { StyleSheet } from 'react-native';
import COLORS from '../../src/themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
  },
  codeGuiderWrapper: {
    marginTop: 30,
  },
  codeGuider: {
    padding: 10,
    backgroundColor: COLORS.cornflowerBlue,
  },
  codeGuiderText: {
    fontWeight: 'bold',
  },
});
