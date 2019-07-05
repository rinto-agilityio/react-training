// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'

// COmponents
import { Text, View, FlatList } from 'react-native'
import Recipe from '../Recipe'

// Styles
import styles from './styles'

// Constant
import { WEB_PLATFORM } from '../../../../constants'

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

  const columns = WEB_PLATFORM ? 3 : 1

  return (
    <View style={styles.container}>
      {recipes.length ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns={columns}
          horizontal={false}
          data={recipes}
          renderItem={({ item }) => (
            <View style={styles.tabContentItem}>
              <Recipe
                size="medium"
                recipe={item}
                favoriteRecipe={isRecipeTab ? favoriteRecipeIds : recipeIds}
                userToggleRecipe={userToggleRecipe}
                userToggleVote={userToggleVote}
                userId={userId}
                wrapperIconStyle={wrapperIconStyle}
              />
            </View>
          )}
          contentContainerStyle={{ justifyContent: 'space-between' }}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>{NO_RECIPES_MESSAGE}</Text>
      )}
    </View>
  )
}

TabContent.defaultProps = {
  favoriteRecipe: [],
  isRecipeTab: false,
}

export default memo<Props>(TabContent)
