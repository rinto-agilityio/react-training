import { StyleSheet } from 'react-native'

import Themes from '@themes'

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: Themes.baseSpacing
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  }
})

export default styles
