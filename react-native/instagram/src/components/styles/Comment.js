import { StyleSheet } from 'react-native'
import Themes from '../../themes'

export const styles = StyleSheet.create({
  comment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Themes.baseSpacing
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 5
  },
  commentInput: {
    height: 30,
    paddingLeft: Themes.baseSpacing,
    borderRadius: 15,
    borderColor: Themes.borderInputColor,
    borderWidth: 1,
    width: '95%'
  }
})
