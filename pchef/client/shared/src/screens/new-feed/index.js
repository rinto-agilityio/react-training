// Libs
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

// Components
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Loading from '../../components/Loading'
import CategoryPipeLine from './components/CategoryPipeLine'
import Modal from '../../components/Modal'
import Error from '../../components/Error'

// Helpers
import { customError } from '../../helpers/utils'

// Styles
import styles from './styles'

type Props = {
  customStyles?: {},
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
  },
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  type?: string,
  onPressCategoryIcon: () => void,
  onPressLogo: () => void,
  handleClickRecipe: () => void,
  history: Object,
  size: string,
  handleRedirectLogin: Function,
  onPressCategoryPipeline: () => void,
}

// Home screen
const NewFeed = ({
  customStyles = {},
  type = 'secondary',
  loading,
  error,
  data,
  onPressCategoryIcon,
  onPressLogo,
  userToggleRecipe,
  handleClickRecipe,
  handleRedirectLogin,
  onPressCategoryPipeline,
  size = 'medium',
}: Props) => {
  const [visible, setVisible] = useState(true)

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

      <View style={styles[`${type}RecipeListContainer`]}>
        {/** Choosen category pipeline */}
        <CategoryPipeLine
          followCategory={followCategory}
          loading={loading}
          onPressCategoryPipeline={onPressCategoryPipeline}
        />

        {recipesList && (
          <RecipeList
            recipes={recipesList}
            type={type}
            favoriteRecipe={favoriteRecipe}
            userToggleRecipe={userToggleRecipe}
            handleClickRecipe={handleClickRecipe}
          />
        )}
      </View>
    </ScrollView>
  )
}

NewFeed.defaultProps = {
  customStyles: {},
  type: 'primary',
}

export default NewFeed
