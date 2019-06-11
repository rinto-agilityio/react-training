// Libs
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

// Helpers
import { selectImage } from '@helpers/uploadImage'

const RecipeForm = () => {
  const childRef = useRef(null)
  const [url, setUrl] = useState()

  const handleAddRecipeImage = async () => {
    await selectImage(url => {
      setUrl(url)
    })
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      <RecipeFormContainer
        ref={childRef}
        handleAddRecipeImage={() => handleAddRecipeImage()}
        previewImage={url}
      />
    </ScrollView>
  )
}

export default RecipeForm
