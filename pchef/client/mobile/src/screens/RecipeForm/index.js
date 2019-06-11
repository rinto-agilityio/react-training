// Libs
import React, { useRef, useState } from 'react'
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
  const childRef = useRef(null)
  const [url, setUrl] = useState()
  const [stepUrl, setStepUrl] = useState()

  const handleAddRecipeImage = async type => {
    await selectImage(url => (type === 'recipe_image' ? setUrl(url) : setStepUrl(url)))
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      <RecipeFormContainer
        ref={childRef}
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
