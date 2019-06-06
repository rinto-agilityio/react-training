import React from 'react'
import RecipeDetailContainer from 'pchef-shared/src/containers/Recipe'

type Props = {
  match: {
    params: {
      recipeId: string
    }
  },
  history: Object,
}

const RecipeDetail = ({ match, history }: Props) => {
  const {
    recipeId,
  } = match.params

  const handleClickRecipeStep = recipeId => {
    history.push(`/recipe-step/${recipeId}/`)
  }

  return (
    <div>
      <RecipeDetailContainer
        id={recipeId}
        onSelectStep={handleClickRecipeStep}
      />
    </div>
  )
}

export default RecipeDetail
