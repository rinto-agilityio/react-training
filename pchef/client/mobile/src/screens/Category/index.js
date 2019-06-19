// Libs
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import CategoryContainer from 'pchef-shared/src/containers/Category'

type Props = {
  navigation: NavigationScreenProps
}

const Category = ({ navigation }: Props) => {
  const {
    categoryId,
  } = navigation.state.params

  return (
    <CategoryContainer id={categoryId}
    />
  )
}

export default Category
