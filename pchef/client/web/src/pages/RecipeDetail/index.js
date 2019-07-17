import React from 'react'
import RecipeDetailContainer from 'pchef-shared/src/screens/recipe/containers'

type Props = {
  match: {
    params: {
      recipeId: string
    }
  },
  history: Object,
}

const RecipeDetail = ({ match, history }: Props) => {
  const { recipeId } = match.params

  const handleClickRecipeStep = recipeId => {
    history.push(`/recipe-step/${recipeId}/`)
  }

  return (
    <RecipeDetailContainer
      id={recipeId}
      onSelectStep={handleClickRecipeStep}
      handleRedirectLogin={() => history.push('/login')}
      customWrapperTagStyles={{
        justifyContent: 'start',
      }}
    />
  )
}

export default RecipeDetail
