// Libs
import React, { useState, useEffect } from 'react'
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
    followCategory: Array<{
      id: string,
      imgUrl: string,
      name: string,
      recipes: Array<{
        id: string,
        title: string,
        description: string,
        imgUrl: string,
        votes: Array<string>,
      }>,
    }>,
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

export default NewFeed
