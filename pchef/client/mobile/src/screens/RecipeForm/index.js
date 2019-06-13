// Libs
import React, { useRef, useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

// Helpers
import { selectImage } from '@helpers/upload-image'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps
}

const RecipeForm = ({ navigation }: Props) => {
  const recipeFormRef: Object = useRef(null)
  const [url, setUrl] = useState()
  const [stepUrl, setStepUrl] = useState()
  const [statusPress, setStatusPress] = useState(false)

  const handlePublishRecipe = async () => {
    // Get method handlePublishRecipe of recipe form
    const { handlePublishRecipe } = recipeFormRef.current.wrappedInstance.getWrappedInstance()
    await handlePublishRecipe()
    navigation.setParams({ status: false })
    setStatusPress(false)
  }

  useEffect(() => {
    setStatusPress(navigation.getParam('status', false))
    statusPress && handlePublishRecipe()
  })

  const handleAddRecipeImage = async type => {
    await selectImage(url => (type === 'recipe_image' ? setUrl(url) : setStepUrl(url)))
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      <RecipeFormContainer
        ref={recipeFormRef}
        handleAddRecipeImage={() => handleAddRecipeImage('recipe_image')}
        previewImage={url}
        redirectAfterPublish={() => navigation.navigate(ROUTES.HOME)}
        handleAddStepImage={() => handleAddRecipeImage('step_image')}
        stepUrl={stepUrl}
      />
    </ScrollView>
  )
}

export default RecipeForm
