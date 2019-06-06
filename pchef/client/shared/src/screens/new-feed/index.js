// Libs
import React, { useState } from 'react'
import { ScrollView, View, Text } from 'react-native'

// Components
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Loading from '../../components/Loading'
import CategoryPipeLine from './components/CategoryPipeLine'
import Modal from '../../components/Modal'

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
  history,
  size = 'medium',
}: Props) => {
  const [visible, setVisible] = useState(true)

  const handleNavigateLogin = () => {
    setVisible(false)
    history.push('/login')
  }

  if (error) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size={size}
      >
        <Text>{ customError(error.graphQLErrors) }</Text>
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

  const handlePressCategoryPipeline = categoryId => (categoryId)

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
          onPressCategoryPipeline={handlePressCategoryPipeline}
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
