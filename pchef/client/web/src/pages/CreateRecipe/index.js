import React, { useState } from 'react'

// helpers
import { handleUploadImage } from '../../helpers/upload-image'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

// styles
import './CustomStyle.css'

type Props = {
  history: Object
}

const CreateRecipe = ({ history }: Props) => {
  const [imgUrl, setImgUrl] = useState('')
  const [stepUrl, setStepUrl] = useState('')

  const redirectAfterPublish = () => (
    history.push('/')
  )
  const handleAddRecipeImageOnWeb = (event, name) => {
    handleUploadImage(event.target.files[0])
      .then(response => {
        name === 'addStep' ? setImgUrl(response.data) : setStepUrl(response.data)
      })
      .catch(error => error)
  }

  return (
    <RecipeFormContainer
      redirectAfterPublish={redirectAfterPublish}
      handleAddRecipeImageOnWeb={event => handleAddRecipeImageOnWeb(event, 'add-recipe')}
      handleAddStepImageOnWeb={event => handleAddRecipeImageOnWeb(event, 'add-step')}
      previewImage={imgUrl}
      stepUrl={stepUrl}
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
      customStyleLabel={{
        marginTop: '30px'
      }}
    />
  )
}

export default CreateRecipe
