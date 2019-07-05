// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'

// COmponents
import { Text, View, ScrollView } from 'react-native'
import Recipe from '../Recipe'

// Styles
import styles from './styles'

// Themes
import { METRICS } from '../../../../themes'

import type { RecipeType } from '../../../../types'

type Props = {
  recipes: Array<RecipeType>,
  userId: string,
  favoriteRecipe?: Array<RecipeType>,
  isRecipeTab?: boolean,
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: { userToggleVote: { results: Array<string> } } }>,
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
    <View style={{ height: METRICS.screenHeight - 370, marginBottom: 100 }}>
      <ScrollView>
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
      </ScrollView>
    </View>
  )
}

TabContent.defaultProps = {
  favoriteRecipe: [],
  isRecipeTab: false,
}

export default memo<Props>(TabContent)
