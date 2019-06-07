// Libs
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

// Component
import Button from 'pchef-shared/src/components/Button'

// Helpers
import { selectImage } from '@helpers/uploadImage'

const RecipeForm = () => {
  const childRef = useRef<Object>(null)
  const [url, setUrl] = useState()

  const handleClick = () => {
    url && childRef.current.wrappedInstance.handleCreateRecipe(JSON.stringify(url))
  }

  const handleAddRecipeImage = async () => {
    await selectImage(response => {
      setUrl(response)
    })
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      <RecipeFormContainer
        ref={childRef}
        handleAddRecipeImage={handleAddRecipeImage}
      />
      <Button
        title="Add"
        onPress={() => handleClick()}
      />
    </ScrollView>
  )
}

export default RecipeForm
