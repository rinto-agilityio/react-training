// Libs
import React, { useRef } from 'react'
import { ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import RecipeFormContainer from 'pchef-shared/src/containers/RecipeForm'

// Component
import Button from 'pchef-shared/src/components/Button'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps
}

const RecipeForm = ({ navigation }: Props) => {
  // const childRef = useRef()

  const handleClick = () => {
    // childRef.current.wrappedInstance.handleCreateRecipe()
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      {/* <RecipeFormContainer ref={childRef} /> */}
      <Button
        title="Add"
        onPress={() => handleClick()}
      />
    </ScrollView>
  )
}

export default RecipeForm
