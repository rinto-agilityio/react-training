import { StyleSheet } from 'react-native'

import Themes from '@themes'

export default StyleSheet.create({
  keyboardPadding: {
    height: 60
  },
  layoutColumn: {
    flex: 1,
    flexDirection: 'column'
  },
  layoutRow: {
    flex: 1,
    flexDirection: 'row'
  },
  tabBarIcon: {
    height: Themes.tabBarIconSize,
    width: Themes.tabBarIconSize
  },
  textBold: {
    fontWeight: 'bold'
  }
})
