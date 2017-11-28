import { StyleSheet } from 'react-native'
import Themes from '../../themes'

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: Themes.baseSpacing,
    backgroundColor: Themes.navigatorBgColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Themes.borderColor
  },
  brand: {
    fontSize: Themes.fontSizeLarge
  }
})
