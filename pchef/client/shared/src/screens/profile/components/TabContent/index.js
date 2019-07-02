// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'

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
  userId: string,
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
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: { userToggleVote: { results: Array<string>}}}>,
  wrapperIconStyle: Object,
}

const TabContent = ({
  recipes,
  userToggleRecipe,
  favoriteRecipe,
  isRecipeTab,
  userToggleVote,
  userId,
  wrapperIconStyle,
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
              userToggleVote={userToggleVote}
              userId={userId}
              wrapperIconStyle={wrapperIconStyle}
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

export default memo<Props>(TabContent)
