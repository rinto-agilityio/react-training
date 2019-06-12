// Libs
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationScreenProps } from 'react-navigation'
import { ScrollView } from 'react-native'

// Containers
import ProfileContainer from 'pchef-shared/src/containers/Profile'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps
}

const Profile = ({ navigation }: Props) => (
  <ScrollView>
    <ProfileContainer
      size="small"
      store={AsyncStorage}
      handleRedirectLogin={() => navigation.navigate(ROUTES.LOGIN)}
    />
  </ScrollView>
)

export default Profile
