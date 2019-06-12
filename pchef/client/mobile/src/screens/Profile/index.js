// Libs
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import ProfileContainer from 'pchef-shared/src/containers/Profile'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps
}

const Profile = ({ navigation }: Props) => (
  <ProfileContainer
    size="small"
    store={AsyncStorage}
    handleRedirectLogin={() => navigation.navigate(ROUTES.LOGIN)}
  />
)

export default Profile
