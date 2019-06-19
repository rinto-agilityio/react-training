// Libs
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

// Components
import NewFeed from 'pchef-shared/src/containers/NewFeed'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps,
}

const Home = ({ navigation }: Props) => (
  <NewFeed
    handleClickRecipe={id => navigation.navigate(ROUTES.DETAIL, { recipeId: id })}
    onPressCategoryPipeline={id => navigation.navigate(ROUTES.CATEGORY, { categoryId: id })}
    handleRedirectLogin={() => navigation.navigate(ROUTES.LOGIN)}
    handleNavigateWelcome={() => navigation.navigate(ROUTES.WELCOME)}
  />
)

export default Home
