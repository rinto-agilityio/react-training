import React, { useEffect } from 'react'

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
      id: string,
      name: string,
      avatar: string,
    },
    followCategory: Array<{
      id: string,
      name: string,
      imgUrl: string,
    }>,
    favoriteRecipe: Array<{
      id: string,
      title: string,
      imgUrl: string,
      description: string,
      votes: Array<number>,
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
