import React from 'react'

// Components
import { View } from 'react-native'
import Header from './components/Header'

// Styles
import styles from './styles'
import Tabs from './components/Tabs'

type Props = {
  user: {
    id: string,
    name: string,
    avatar: string,
    followCategory: Array<{
      name: string,
      imgUrl: string,
    }>,
    favoriteRecipe: Array<{
      id: string,
      title: string,
      imgUrl: string,
      description: string,
    }>,
  },
}
const Profile = ({ user }: Props) => (
  <View style={styles.profile}>
    <Header user={user} />
    <Tabs categories={user.followCategory} recipes={user.favoriteRecipe} />
  </View>
)

export default Profile
