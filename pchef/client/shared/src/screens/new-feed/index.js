// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, useEffect, memo } from 'react'
import { View, Platform, ScrollView, Dimensions } from 'react-native'

// Components
import RecipeList from './components/RecipeList'
import Loading from '../../components/Loading'
import CategoryPipeLine from './components/CategoryPipeLine'
import Modal from '../../components/Modal'
import Error from '../../components/Error'
import Header from '../../components/Header'

// Helpers
import { customError } from '../../helpers/utils'

// Constants
import { MINIMUM_FOLLOWED_CATEGORY, TABBAR_HEIGHT } from '../../constants/index'

// Styles
import styles from './styles'

import type { FollowCategoryType } from '../../types'

const { height } = Dimensions.get('window')

type Props = {
  handleNavigateWelcome?: () => void,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  loading: boolean,
  data: {
    favoriteRecipe: Array<{
      id: string,
    }>,
    followCategory: Array<FollowCategoryType>,
    user: Object,
  },
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: { userToggleVote: { results: Array<string>}}}>,
  type?: string,
  handleClickRecipe: () => void,
  size: string,
  handleRedirectLogin: Function,
  onPressCategoryPipeline: () => void,
  customStyleWrapRecipes: Object,
  wrapperIconStyle: Object,
}

// Home screen
const NewFeed = ({
  handleNavigateWelcome = () => {},
  type = 'secondary',
  loading,
  error,
  data = {},
  userToggleRecipe,
  handleClickRecipe,
  handleRedirectLogin = () => {},
  onPressCategoryPipeline,
  size = 'medium',
  userToggleVote,
  customStyleWrapRecipes,
  wrapperIconStyle,
}: Props) => {
  const [visible, setVisible] = useState(true)
  const isMobile = Platform.OS !== 'web'
  const [heightHeader, setHeightHeader] = useState(0)

  useEffect(() => {
    const { followCategory = [] } = data
    if (!loading && followCategory.length < MINIMUM_FOLLOWED_CATEGORY) {
      handleNavigateWelcome()
    }
  }, [data.followCategory])

  const handleNavigateLogin = () => {
    setVisible(false)
    handleRedirectLogin()
  }

  if (error) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size={size}
        customDialog={{ top: 150 }}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }

  if (loading) return <Loading size={type === 'primary' ? 'small' : 'large'} />

  const { followCategory, favoriteRecipe, user } = data

  // Get all recipes on follow categories
  let recipesList = []

  followCategory.forEach(category => {
    recipesList = recipesList.concat(category.recipes)
  })

  const renderListRecipes = () => (
    <>
      <ScrollView horizontal>
        <CategoryPipeLine
          followCategory={followCategory}
          loading={loading}
          onPressCategoryPipeline={onPressCategoryPipeline}
        />
      </ScrollView>

      {
        recipesList && (
          <RecipeList
            recipes={recipesList}
            type={type}
            favoriteRecipe={favoriteRecipe}
            userToggleRecipe={userToggleRecipe}
            handleClickRecipe={handleClickRecipe}
            userToggleVote={userToggleVote}
            userId={user.id}
            customStyleWrapRecipes={customStyleWrapRecipes}
            wrapperIconStyle={wrapperIconStyle}
          />
        )
      }
    </>
  )

  return (
    <View style={styles[`${type}RecipeListContainer`]}>
      {isMobile ? (
        <Header
          onPressCategoryIcon={handleNavigateWelcome}
          onLayout={event => event && setHeightHeader(event.nativeEvent.layout.height)}
        />
      ) : null}
      {/** Choosen category pipeline */ }
      {isMobile ? (
        <View style={{ height: (height - heightHeader - TABBAR_HEIGHT) || '100%' }}>
          <ScrollView>
            {renderListRecipes()}
          </ScrollView>
        </View>
      ) : renderListRecipes()}
    </View>
  )
}

export default memo<Props>(NewFeed)
