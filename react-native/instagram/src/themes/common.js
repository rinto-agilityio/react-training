import { StyleSheet } from 'react-native'

import Themes from '@themes'

export default StyleSheet.create({
  textBold: {
    fontWeight: 'bold'
  },
  layoutRow: {
    flex: 1,
    flexDirection: 'row'
  },
  layoutColumn: {
    flex: 1,
    flexDirection: 'column'
  },
  tabBarIcon: {
    width: Themes.tabBarIconSize,
    height: Themes.tabBarIconSize
  }
})
