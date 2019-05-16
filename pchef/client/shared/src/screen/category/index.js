// Libs
import React from 'react'
import { Platform, View } from 'react-native'

// Components
import Header from './components/Header'
import Recipe from './components/Recipe'

// styles
import styles from './styles'

type Props = {
  category: {
    name: string,
    imgUrl: string,
  },
  recipes: Array<{
    id: number,
    title: string,
    image: string,
    description: string,
  }>,
}
const CategoryScreen = ({ category, recipes }: Props) => {
  const size = Platform.OS === 'web' ? 'large' : 'small'

  return (
    <>
      <Header category={category} isGrid sizeType={size} />
      <View style={styles.container}>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} sizeType={size} />
        ))}
      </View>
    </>
  )
}

export default CategoryScreen
