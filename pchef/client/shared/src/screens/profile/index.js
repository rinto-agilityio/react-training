import React from 'react'

// Components
import { View } from 'react-native'
import Header from './components/Header'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

// Styles
import styles from './styles'
import Tabs from './components/Tabs'

type Props = {
  loading: boolean,
  error: string,
  data: {
    user: {
      name: string,
      avatar: string,
    },
    ownRecipes: Array<{
      id: string,
      title: string,
      imgUrl: string,
      votes: Array<string>,
      description: string,
    }>,
    favoriteRecipe: Array<{
      id: string,
      title: string,
      imgUrl: string,
      votes: Array<string>,
      description: string,
    }>,
  },
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
}
const Profile = ({ data, loading, error, userToggleRecipe }: Props) => {
  const errorMessage =
    'Can not load information of user. Please check for connection!!!'

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={errorMessage} />
  }

  const { user, favoriteRecipe, ownRecipes } = data

  return (
    <View style={styles.profile}>
      <Header user={user} />
      <Tabs
        ownRecipes={ownRecipes}
        favoriteRecipe={favoriteRecipe}
        userToggleRecipe={userToggleRecipe}
      />
    </View>
  )
}

export default Profile
