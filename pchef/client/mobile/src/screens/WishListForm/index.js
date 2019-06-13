// Libs
import React, { useEffect, useState, useRef } from 'react'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import WishListFormContainer from 'pchef-shared/src/containers/WishListForm'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps
}

const WishListForm = ({ navigation }: Props) => {
  const wishListFormRef: Object = useRef(null)
  const [statusPress, setStatusPress] = useState(false)

  const handleCreateWishList = async () => {
    // Get method handlePublishRecipe of wish list form
    const { wrappedInstance } = wishListFormRef.current.wrappedInstance.getWrappedInstance()
    await wrappedInstance.handleCreateWishList()
    navigation.setParams({ status: false })
    setStatusPress(false)
  }

  useEffect(() => {
    setStatusPress(navigation.getParam('status', false))
    statusPress && handleCreateWishList()
  })

  return (
    <WishListFormContainer
      handleRedirectWishlist={() => navigation.navigate(ROUTES.WISHLIST)}
      customContainer={{
        flex: 1,
      }}
      customModal={{
        marginTop: 0,
      }}
      ref={wishListFormRef}
    />
  )
}

export default WishListForm
