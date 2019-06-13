import React, { useState } from 'react'

// helpers
import { handleUploadImage } from '../../helpers/upload-image'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

type Props = {
  history: Object
}

const CreateRecipe = ({ history }: Props) => {
  const [imgUrl, setImgUrl] = useState('')

  const redirectAfterPublish = () => (
    history.push('/')
  )
  const handleAddRecipeImageOnWeb = event => {
    handleUploadImage(event.target.files[0])
      .then(dataUrl => {
        setImgUrl(dataUrl)
      })
      .catch(error => error)
  }
  return (
    <RecipeFormContainer
      redirectAfterPublish={redirectAfterPublish}
      handleAddRecipeImageOnWeb={handleAddRecipeImageOnWeb}
      previewImage={imgUrl}
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
