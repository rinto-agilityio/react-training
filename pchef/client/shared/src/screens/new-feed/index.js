// Libs
import React, { useState } from 'react'
import { View } from 'react-native'

// Components
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
  customStyles = {},
  type = 'secondary',
  loading,
  error,
  data,
  userToggleRecipe,
  handleClickRecipe,
  handleRedirectLogin = () => {},
  onPressCategoryPipeline,
  size = 'medium',
  userToggleVote,
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

  const { followCategory, favoriteRecipe, user } = data

  // Get all recipes on follow categories
  let recipesList = []

  followCategory.forEach(category => {
    recipesList = recipesList.concat(category.recipes)
  })

  return (

    <View style={styles[`${type}RecipeListContainer`]}>
      {/** Choosen category pipeline */ }
      <CategoryPipeLine
        followCategory={followCategory}
        loading={loading}
        onPressCategoryPipeline={onPressCategoryPipeline}
      />

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
    </View>
  )
}

NewFeed.defaultProps = {
  customStyles: {},
  type: 'primary',
}

export default NewFeed
