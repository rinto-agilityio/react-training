// Libs
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

// Components
import NewFeed from 'pchef-shared/src/containers/NewFeed'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: {
    navigate: NavigationScreenProps,
  },
}
const Home = ({ navigation }: Props) => (
  <NewFeed
    onPressCategoryIcon={() => navigation.navigate(ROUTES.WELCOME)}
    handleClickRecipe={id => navigation.navigate(ROUTES.DETAIL, { recipeId: id })}
  />
)

export default Home
