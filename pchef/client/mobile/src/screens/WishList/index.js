// Libs
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { ScrollView } from 'react-native'

// Containers
import WishListContainer from 'pchef-shared/src/containers/WishList'
import WishListComponent from 'pchef-shared/src/screens/wish-list/components/WishList'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps
}

const WishList = ({ navigation }: Props) => (
  <ScrollView>
    <WishListContainer
      handleRedirectLogin={() => navigation.navigate(ROUTES.LOGIN)}
      handleRedirectWishlistForm={() => navigation.navigate(ROUTES.WISHLIST_FORM)}
    />
  </ScrollView>
)

export default WishList
