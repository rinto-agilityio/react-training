import React from 'react'

// Components
import { View, Text } from 'react-native'
import Header from './components/Header'

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
    followCategory: Array<{
      name: string,
      imgUrl: string,
    }>,
    favoriteRecipe: Array<{
      title: string,
      imgUrl: string,
      votes: Array<number>,
      description: string,
    }>,
  },
}
const Profile = ({ data, loading, error }: Props) => {
  if (loading) {
    return <Text>Loading!!!</Text>
  }

  if (error) {
    return <Text>Failed!!!</Text>
  }

  const { user, favoriteRecipe, followCategory } = data

  return (
    <View style={styles.profile}>
      <Header user={user} />
      <Tabs categories={followCategory} recipes={favoriteRecipe} />
    </View>
  )
}

export default Profile
