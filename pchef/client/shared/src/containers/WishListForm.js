import { compose } from 'react-apollo'

// GraphQL
import { getAllCookingTypes, getAllCategories } from '../graphql/recipe'
import { createWishList } from '../graphql/wish-list'
import WishListForm from '../screens/wish-list/components/WishListForm'

export default compose(
  getAllCookingTypes,
  getAllCategories,
  createWishList )( WishListForm )