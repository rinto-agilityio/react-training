// Libs
import React, { useEffect, useState, useRef } from 'react'
import { NavigationScreenProps } from 'react-navigation'

// Containers
import WishListFormContainer from 'pchef-shared/src/containers/WishListForm'

// Constants
import ROUTES from '@constants/routes'
import Button from 'pchef-shared/src/components/Button';

type Props = {
  navigation: NavigationScreenProps
}

const WishListForm = ({ navigation }: Props) => {
  const wishListFormRef = useRef()
  const [statusPress, setStatusPress] = useState(false)

  const handleCreateWishList = async () => {
    console.log(wishListFormRef.current)
    // await wishListFormRef.current.wrappedInstance.handleCreateWishList()
    // setStatusPress(false)
  }

  useEffect(() => {
    setStatusPress(navigation.getParam('status', false))
    statusPress && handleCreateWishList()
    // navigation.setParams({ status: false })
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
