import React from 'react'

// COmponents
import { Text, View } from 'react-native'
import Recipe from '../Recipe'

// Styles
import styles from './styles'

type Props = {
  recipes: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
    votes: Array<string>,
  }>,
  favoriteRecipe?: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
    votes: Array<string>,
  }>,
  isRecipeTab?: boolean,
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
}

const TabContent = ({
  recipes,
  userToggleRecipe,
  favoriteRecipe,
  isRecipeTab,
}: Props) => {
  const NO_RECIPES_MESSAGE = 'No recipes to show'

  // Get array recipe ids
  const recipeIds = recipes.map(recipe => ({ id: recipe.id }))
  const favoriteRecipeIds = favoriteRecipe
    ? favoriteRecipe.map(recipe => ({ id: recipe.id }))
    : []

  return (
    <>
      {recipes.length ? (
        recipes.map((recipe, index) => (
          <View key={index} style={styles.tabContentItem}>
            <Recipe
              size="medium"
              recipe={recipe}
              favoriteRecipe={isRecipeTab ? favoriteRecipeIds : recipeIds}
              userToggleRecipe={userToggleRecipe}
            />
          </View>
        ))
      ) : (
        <Text>{NO_RECIPES_MESSAGE}</Text>
      )}
    </>
  )
}

TabContent.defaultProps = {
  favoriteRecipe: [],
  isRecipeTab: false,
}

export default TabContent
