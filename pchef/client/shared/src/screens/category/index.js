// Libs
import React from 'react'
import { Platform, View } from 'react-native'

// Components
import Header from './components/Header'
import Recipe from './components/Recipe'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

// styles
import styles from './styles'

type Props = {
  category: {
    name: string,
    imgUrl: string,
  },
  recipes: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
  }>,
  loading: boolean,
  error: object,
}
const CategoryScreen = ({
  category = {},
  recipes = [],
  loading,
  error,
}: Props) => {
  const size = Platform.OS === 'web' ? 'large' : 'small'
  if (loading) return <Loading size="small" />
  if (error) return <Error size="small" />
  return (
    <>
      <Header category={category} isGrid size={size} />
      <View style={styles.container}>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} size={size} />
        ))}
      </View>
    </>
  )
}

export default CategoryScreen
