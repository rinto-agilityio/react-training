import { StyleSheet } from 'react-native'
import Themes from '@themes'

// TODO: Remove align and justifyContent to make it work on android simulator for now

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.bgColor
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
