import { StyleSheet } from 'react-native'
import Themes from '@themes'

export const styles = StyleSheet.create({
  comment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Themes.baseSpacing
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 5
  },
  commentInput: {
    height: 40, // Handle padding default on Android
    paddingLeft: Themes.baseSpacing,
    borderRadius: 20,
    borderColor: Themes.borderInputColor,
    borderWidth: 1,
    width: '95%'
  }
})
