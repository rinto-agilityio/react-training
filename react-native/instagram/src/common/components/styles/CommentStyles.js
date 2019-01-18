import { StyleSheet } from 'react-native'
import Themes from '@themes'

export const styles = StyleSheet.create({
  comment: {
    alignItems: 'center',
    marginTop: Themes.baseSpacing
  },
  avatar: {
    height: Themes.textInputHeight * 0.75,
    width: Themes.textInputHeight * 0.75,
    borderRadius: Themes.textInputHeight * 0.75 / 2,
    width: '5%'
  },
  commentInput: {
    height: Themes.textInputHeight, // Handle padding default on Android
    paddingLeft: Themes.baseSpacing,
    borderRadius: Themes.textInputHeight / 2,
    borderColor: Themes.borderInputColor,
    borderWidth: 1,
    width: '93%',
    marginLeft: 5
  }
})
