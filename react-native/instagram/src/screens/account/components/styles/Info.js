import { StyleSheet } from 'react-native';

import Themes from '../../../../themes';

export const styles = StyleSheet.create({
  wrapper: {
    padding: Themes.baseSpacing
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Themes.baseSpacing
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  username: {
    marginLeft: 20,
    fontSize: Themes.fontSizeLarge
  }
});
