// Helpers
import { isIOS } from '@helpers/device-info'

const appHeadingIOS = 20,
  appHeadingAndroid = 10,
  textInputHeightIOS = 30,
  textInputHeightAndroid = 40

// Base theme config for app
export default {
  appPaddingTop: isIOS() ? appHeadingIOS : appHeadingAndroid,
  textInputHeight: isIOS() ? textInputHeightIOS : textInputHeightAndroid,
  baseSpacing: 10,
  bgColor: '#fff',
  navigatorBgColor: '#f9f9f9',
  borderColor: '#eee',
  borderInputColor: '#a7a7a7',
  fontSizeLarge: 24,
  tabBarPosition: 'bottom',
  tabBarTextActiveColor: '#000',
  tabBarIconSize: 24,
  iconSize: 24
}
