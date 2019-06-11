import React from 'react'

// Containers
import WishListFormContainer from 'pchef-shared/src/containers/WishListForm'

type Props = {
  history: Object
}

const WishList = ({ history }: Props) => (
  <WishListFormContainer
    handleRedirectWishlist={() => history.push('/wishlist')}
  />
)

export default WishList
