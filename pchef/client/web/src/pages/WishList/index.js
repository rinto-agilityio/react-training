import React from 'react'

// Containers
import WishListContainer from 'pchef-shared/src/containers/WishList'

type Props = {
  history: Object
}

const WishList = ({ history }: Props) => (
  <WishListContainer
    handleRedirectLogin={() => history.push('/login')}
    handleRedirectWishlistForm={() => history.push('/wishlist-form')}
  />
)

export default WishList
