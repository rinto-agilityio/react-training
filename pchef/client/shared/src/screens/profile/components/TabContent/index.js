// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'

// COmponents
import { Text, View, FlatList } from 'react-native'
import RecipeContainer from '../../containers/recipe'

// Styles
import styles from './styles'

// Constant
import { WEB_PLATFORM } from '../../../../constants'

import type { Recipe as RecipeType } from '../../../../flow-types/recipe'

type Props = {
  recipes: Array<RecipeType>,
  userId: string,
  favoriteRecipe?: Array<RecipeType>,
  isRecipeTab?: boolean,
  wrapperIconStyle: Object,
}

const TabContent = ({
  recipes,
  favoriteRecipe,
  isRecipeTab,
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
              <RecipeContainer
                size="medium"
                recipe={item}
                favoriteRecipe={isRecipeTab ? favoriteRecipeIds : recipeIds}
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
