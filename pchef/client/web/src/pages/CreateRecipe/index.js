import React, { useState } from 'react'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

// helpers
import { handleUploadImage, compressImage } from '../../helpers/upload-image'

// constants
import { IMAGE_TYPE } from '../../constants'

// styles
import './CustomStyle.css'

type Props = {
  history: Object
}

const CreateRecipe = ({ history }: Props) => {
  const [imgUrl, setImgUrl] = useState('')
  const [stepUrl, setStepUrl] = useState('')
  const [fileEvent, setFileEvent] = useState({})

  const redirectAfterPublish = () => (
    history.push('/')
  )

  const handleAddRecipeImageOnWeb = (e, name) => {
    const url = e.target.files[0] && (window.URL || window.webkitURL).createObjectURL(e.target.files[0])
    e.target.files[0] && setFileEvent(e.target.files[0])
    name === IMAGE_TYPE.RECIPE ? setImgUrl(url) : setStepUrl(url)
  }

  const minifyOptions = {
    maxSizeMB: 1,
    maxWidthOrHeight: 300,
    useWebWorker: true,
  }

  return (
    <RecipeFormContainer
      redirectAfterPublish={redirectAfterPublish}
      handleAddRecipeImageOnWeb={event => handleAddRecipeImageOnWeb(event, IMAGE_TYPE.RECIPE)}
      handleAddStepImageOnWeb={event => handleAddRecipeImageOnWeb(event, IMAGE_TYPE.RECIPE_STEP)}
      uploadImage={() => handleUploadImage(fileEvent)}
      compressImage={() => compressImage(fileEvent, minifyOptions)}
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
        marginTop: '30px',
      }}
    />
  )
}

export default CreateRecipe
