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
    <RecipeFormContainer
      redirectAfterPublish={redirectAfterPublish}
      customStyle={{
        marginTop: '0',
        marginBottom: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        minWidth: '800px',
      }}
      customStyleError={{
        color: 'red',
      }}
    />
  )
}

export default CreateRecipe
