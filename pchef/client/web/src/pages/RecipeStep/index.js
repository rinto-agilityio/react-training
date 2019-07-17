import React from 'react'
import RecipeStepContainer from 'pchef-shared/src/screens/recipe-step/containers'

type Props = {
  match: {
    params: {
      recipeId: string
    }
  },
  history: Object,
}

const RecipeStep = ({ match, history }: Props) => {
  const {
    recipeId,
  } = match.params

  return (
    <RecipeStepContainer
      id={recipeId}
      handleRedirectLogin={() => history.push('/login')}
      wrapperIconStyle={{
        fontSize: '30px',
      }}
    />
  )
}
export default RecipeStep
