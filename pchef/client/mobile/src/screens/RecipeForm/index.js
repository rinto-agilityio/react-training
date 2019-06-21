// Libs
import React, { useRef, useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

// Helpers
import { selectImage, uploadImage } from '@helpers/upload-image'

// Constants
import ROUTES from '@constants/routes'
import { IMAGE_TYPE } from '@constants/variables'

type Props = {
  navigation: NavigationScreenProps
}

const RecipeForm = ({ navigation }: Props) => {
  const recipeFormRef: Object = useRef(null)
  const [imageData, setImageData] = useState({})
  const [imageStep, setImageStep] = useState({})
  const [statusPress, setStatusPress] = useState(false)

  useEffect(() => {
    setStatusPress(navigation.getParam('status', false))
    statusPress && handlePublishRecipe()
  })

  const handlePublishRecipe = async () => {
    navigation.setParams({ status: false })
    setStatusPress(false)
    // Get method handlePublishRecipe of recipe form
    const { handlePublishRecipe } = recipeFormRef.current.wrappedInstance.getWrappedInstance()
    await handlePublishRecipe()
  }

  const handleAddRecipeImage = async type => {
    await selectImage(response => (type === IMAGE_TYPE.RECIPE ? setImageData(response) : setImageStep(response)))
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      <RecipeFormContainer
        ref={recipeFormRef}
        handleAddRecipeImage={() => handleAddRecipeImage(IMAGE_TYPE.RECIPE)}
        previewImage={imageData.uri}
        redirectAfterPublish={() => navigation.navigate(ROUTES.HOME)}
        handleAddStepImage={() => handleAddRecipeImage(IMAGE_TYPE.STEP)}
        stepUrl={imageStep.uri}
        size="small"
        uploadImage={() => imageData.uri && uploadImage(imageData)}
        uploadStepImage={() => imageStep.uri && uploadImage(imageStep)}
      />
    </ScrollView>
  )
}

export default RecipeForm
