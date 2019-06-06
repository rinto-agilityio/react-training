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
    <div>
      <RecipeStepContainer
        id={recipeId}
      />
    </div>
  )
}

export default RecipeStep
