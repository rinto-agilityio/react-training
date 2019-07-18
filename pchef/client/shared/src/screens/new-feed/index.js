// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, useEffect, memo } from 'react'
import { View, Platform, ScrollView, Dimensions } from 'react-native'
import whyDidYouRender from '@welldone-software/why-did-you-render'

// Components
import Loading from '../../components/Loading'
import CategoryPipeLine from './components/CategoryPipeLine'
import Modal from '../../components/Modal'
import Error from '../../components/Error'
import Header from '../../components/Header'

// containers
import RecipeListContainer from './containers/RecipeList'

// Helpers
import { customError } from '../../helpers/utils'

// Constants
import { MINIMUM_FOLLOWED_CATEGORY, TABBAR_HEIGHT } from '../../constants/index'

// Styles
import styles from './styles'

import type { Category } from '../../flow-types/category'

const { height } = Dimensions.get('window')

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
  })
}

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
    followCategory: Array<Category>,
    user: Object,
  },
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
  handleClickRecipe,
  handleRedirectLogin = () => {},
  onPressCategoryPipeline,
  size = 'medium',
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
          <RecipeListContainer
            recipes={recipesList}
            type={type}
            favoriteRecipe={favoriteRecipe}
            handleClickRecipe={handleClickRecipe}
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

NewFeed.whyDidYouRender = true

export default memo<Props>(NewFeed)
