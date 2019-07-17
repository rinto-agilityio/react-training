// Libs
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import RecipeDetailContainer from 'pchef-shared/src/screens/recipe/containers'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps
}

const RecipeDetail = ({ navigation }: Props) => {
  const {
    recipeId,
  } = navigation.state.params

  return (
    <RecipeDetailContainer
      id={recipeId}
      onSelectStep={id => navigation.navigate(ROUTES.STEP, { stepId: id })}
    />
  )
}

export default RecipeDetail
