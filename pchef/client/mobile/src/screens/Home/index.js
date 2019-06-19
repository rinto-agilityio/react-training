// Libs
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { ScrollView } from 'react-native'

// Components
import NewFeed from 'pchef-shared/src/containers/NewFeed'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps,
}

const Home = ({ navigation }: Props) => (
  <ScrollView>
    <NewFeed
      handleClickRecipe={id => navigation.navigate(ROUTES.DETAIL, { recipeId: id })}
      onPressCategoryPipeline={id => navigation.navigate(ROUTES.CATEGORY, { categoryId: id })}
      handleRedirectLogin={() => navigation.navigate(ROUTES.LOGIN)}
      handleNavigateWelcome={() => navigation.navigate(ROUTES.WELCOME)}
    />
  </ScrollView>
)

export default Home
