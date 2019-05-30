// Libs
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import styles from './styles'
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

type Props = {
  customStyles?: {},
  error: string,
  loading: boolean,
  data: {
    favoriteRecipe: Array<{
      id: string,
    }>,
    followCategory: Array<{
      recipes: Array<{
        id: string,
        title: string,
        description: string,
        imgUrl: string,
        votes: Array<string>,
      }>,
    }>,
  },
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  type?: string,
  onPressCategoryIcon: () => void,
  onPressLogo: () => void,
}

// Home screen
const NewFeed = ({
  customStyles = {},
  type = 'primary',
  loading,
  error,
  data,
  onPressCategoryIcon,
  onPressLogo,
  userToggleRecipe,
}: Props) => {
  const errorMessage = 'Connect failed!!!'

  if (error) {
    return <Error message={errorMessage} />
  }

  if (loading) return <Loading />

  const { followCategory, favoriteRecipe } = data

  // Get all recipes on follow categories
  let recipesList = []

  followCategory.forEach(category => {
    recipesList = recipesList.concat(category.recipes)
  })

  return (
    <ScrollView
      style={[styles.container, styles[`${type}Container`], customStyles]}
    >
      <Header
        onPressIcon={() => {}}
        onPressCategoryIcon={onPressCategoryIcon}
        onPressLogo={onPressLogo}
        type={type}
      />

      {recipesList && (
        <RecipeList
          recipes={recipesList}
          type={type}
          favoriteRecipe={favoriteRecipe}
          userToggleRecipe={userToggleRecipe}
        />
      )}
    </ScrollView>
  )
}

NewFeed.defaultProps = {
  customStyles: {},
  type: 'primary',
}

export default NewFeed
