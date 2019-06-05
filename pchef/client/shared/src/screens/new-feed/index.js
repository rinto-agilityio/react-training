// Libs
import React from 'react'
import { ScrollView, View } from 'react-native'

// Components
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import CategoryPipeLine from './components/CategoryPipeLine'

// Styles
import styles from './styles'

type Props = {
  customStyles?: {},
  error: string,
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
}: Props) => {
  const errorMessage = 'Connect failed!!!'

  if (error) {
    return <Error message={errorMessage} />
  }

  if (loading) return <Loading />

  const { followCategory, favoriteRecipe } = data

  // Get all recipes on follow categories
  let recipesList = []

  followCategory.forEach(category => {
    recipesList = recipesList.concat(category.recipes)
  })

  const handlePressCategoryPipeline = categoryId => (
    console.log('categoryId', categoryId)
  )

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
