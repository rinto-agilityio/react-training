import { Platform } from 'react-native'

// Base theme config for app
export default {
  appPaddingTop: Platform.OS === 'ios' ? 20 : 10,
  textInputHeight: Platform.OS === 'ios' ? 30 : 40, // Android has padding by default
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
