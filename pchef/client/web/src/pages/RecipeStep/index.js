import React from 'react'
import RecipeStepContainer from 'pchef-shared/src/containers/RecipeStep'

type Props = {
  match: {
    params: {
      recipeId: string
    }
  },
}

const RecipeStep = ({ match }: Props) => {
  const {
    recipeId,
  } = match.params

  return (
    <RecipeStepContainer
      id={recipeId}
    />
  )
}
export default RecipeStep
