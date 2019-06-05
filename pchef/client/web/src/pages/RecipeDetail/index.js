import React from 'react'
import RecipeDetailContainer from 'pchef-shared/src/containers/Recipe'

type Props = {
  match: {
    params: {
      recipeId: string
    }
  }
}

const RecipeDetail = ({ match }: Props) => {
  const {
    recipeId,
  } = match.params

  return (
    <RecipeDetailContainer id={recipeId} />
  )
}

export default RecipeDetail
