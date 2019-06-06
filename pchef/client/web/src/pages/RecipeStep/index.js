import React from 'react'
import RecipeStepContainer from 'pchef-shared/src/containers/RecipeStep'

type Props = {
  match: {
    params: {
      recipeId: string
    }
  },
  history: Object
}

const RecipeStep = ({ match, history }: Props) => {
  const {
    recipeId,
  } = match.params

  return (
    <RecipeStepContainer
      id={recipeId}
      history={history}

    />
  )
}
export default RecipeStep
