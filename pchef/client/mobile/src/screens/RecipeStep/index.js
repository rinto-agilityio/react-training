// Libs
import React from 'react'

// Containers
import RecipeStepContainer from 'pchef-shared/src/containers/RecipeStep'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: {
    state: {
      params: {
        recipeId: string
      }
    },
    navigate: (name: string) => void,
  }
}

const RecipeStep = ({ navigation }: Props) => {
  const {
    stepId,
  } = navigation.state.params

  return (
    <RecipeStepContainer
      id={stepId}
    />
  )
}

export default RecipeStep
