// Libs
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import styles from './styles'
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

type Props = {
  customStyles?: {},
  data: {
    error: string,
    loading: boolean,
    getUser: {
      followCategory: Array<{
        recipes: Array<{
          id: string,
          title: string,
          description: string,
          imgUrl: string,
          votes: Array<string>,
        }>,
      }>,
    },
  },
  type?: string,
  onPressCategoryIcon: () => void,
  onPressLogo: () => void,
}

// Home screen
const NewFeed = ({
  customStyles = {},
  type = 'primary',
  data,
  onPressCategoryIcon,
  onPressLogo,
}: Props) => {
  const errorMessage = 'Connect failed!!!'

  const { error, loading, getUser } = data

  if (error) {
    return <Error message={errorMessage} />
  }

  if (loading) return <Loading />

  let recipesList = []

  getUser.followCategory.forEach(category => {
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

      {recipesList && <RecipeList recipes={recipesList} type={type} />}
    </ScrollView>
  )
}

NewFeed.defaultProps = {
  customStyles: {},
  type: 'primary',
}

export default NewFeed
