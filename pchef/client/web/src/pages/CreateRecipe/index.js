import React from 'react'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

type Props = {
  history: Object
}

const CreateRecipe = ({ history }: Props) => {
  const redirectAfterPublish = () => (
    history.push('/')
  )

  return (
    <RecipeFormContainer redirectAfterPublish={redirectAfterPublish} />
  )
}

export default CreateRecipe
