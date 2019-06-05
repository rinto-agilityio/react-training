// Libs
import React from 'react'

// Components
import NewFeed from 'pchef-shared/src/containers/NewFeed'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: {
    navigate: (name: string) => void,
  },
}
const Home = ({ navigation }: Props) => (
  <NewFeed onPressCategoryIcon={() => navigation.navigate(ROUTES.WELCOME)} />
)

export default Home
