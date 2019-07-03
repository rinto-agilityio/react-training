// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, memo } from 'react'

// Components
import { View, Text } from 'react-native'
import Recipe from '../Recipe'
import Loading from '../../../../components/Loading'

// Utils
import { sortRecipes } from '../../../../helpers/utils'
import { NO_RECIPES_MESSAGE } from '../../../../constants'
// Styles
import styles from './styles'

type Props = {
  loading?: boolean,
  recipes?: Array<{
    id: string,
    title: string,
    description: string,
    imgUrl: string,
    votes: Array<string>,
    thumbnail: string,
  }>,
  favoriteRecipe: Array<{
    id: string,
  }>,
  type?: string,
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  handleClickRecipe: () => void,
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: { userToggleVote: { results: Array<string>}}}>,
  userId: string,
  customStyleWrapRecipes: Object,
  wrapperIconStyle: Object,

}

const RecipeList = ({
  loading,
  recipes = [],
  type = '',
  favoriteRecipe,
  userToggleRecipe,
  handleClickRecipe,
  userToggleVote,
  userId,
  customStyleWrapRecipes,
  wrapperIconStyle,
}: Props) => {
  const [isViewRecipeList, setViewRecipeList] = useState(true)

  // define recipe size follow type
  const size = type === 'primary' ? 'medium' : 'large'
  const renderRecipeList = () => (isViewRecipeList
    ? (recipes.map(recipe => (
      <Recipe
        key={recipe.id}
        recipe={recipe}
        size={size}
        favoriteRecipe={favoriteRecipe}
        userToggleRecipe={userToggleRecipe}
        handleClickRecipe={handleClickRecipe}
        userToggleVote={userToggleVote}
        userId={userId}
        wrapperIconStyle={wrapperIconStyle}
      />
    )))
    : (
      // Sort recipes by most Votes
      recipes && sortRecipes(recipes).map(recipe => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          size={size}
          favoriteRecipe={favoriteRecipe}
          userToggleRecipe={userToggleRecipe}
          handleClickRecipe={handleClickRecipe}
          userToggleVote={userToggleVote}
          userId={userId}
          wrapperIconStyle={wrapperIconStyle}
        />
      ))
    ))

  const recipeList = recipes.length
    ? renderRecipeList() : <Text style={styles.noRecipeMessage}>{NO_RECIPES_MESSAGE}</Text>

  return (
    <View style={[styles.container, styles[`${type}Container`]]}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.tabListContainer}>
          <View style={styles.tabWrap}>
            <Text
              style={[styles.tab, isViewRecipeList ? styles.tabViewActive : styles.tabView]}
              onPress={() => setViewRecipeList(true)}
            > All Recipes
            </Text>
            <Text
              style={[styles.tab, isViewRecipeList ? styles.tabView : styles.tabViewActive]}
              onPress={() => setViewRecipeList(false)}
            > Top Votest Recipes
            </Text>
          </View>

          {/** Render Recipe list here */}
          <View style={customStyleWrapRecipes}>
            {recipeList}
          </View>
        </View>
      )}
    </View>
  )
}

RecipeList.defaultProps = {
  type: 'primary',
  recipes: [],
  loading: false,
}

export default memo<Props>(RecipeList)
