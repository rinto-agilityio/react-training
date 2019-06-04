// Libs
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

// Components
import NewFeed from 'pchef-shared/src/containers/NewFeed'
import BtnPaper from 'pchef-shared/src/components/Button'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: {
    navigate: (name: string) => void,
  },
}
const Home = ({ navigation }: Props) => (
  <>
    <BtnPaper title="BtnPaper" onPress={() => AsyncStorage.removeItem('token')} />
    <NewFeed onPressCategoryIcon={() => navigation.navigate(ROUTES.WELCOME)} />
  </>
)

export default Home
