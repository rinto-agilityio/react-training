// Libs
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import RecipeStepContainer from 'pchef-shared/src/containers/RecipeStep'

type Props = {
  navigation: NavigationScreenProps
}

const RecipeStep = ({ navigation }: Props) => {
  const {
    stepId,
  } = navigation.state.params

  return (
    <RecipeStepContainer id={stepId} />
  )
}

export default RecipeStep
