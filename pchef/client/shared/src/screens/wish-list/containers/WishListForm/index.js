import { compose } from 'react-apollo'

// GraphQL
import { getAllCookingTypes, getAllCategories, getAllRecipes } from '../../../../graphql/recipe'
import { createWishList } from '../../../../graphql/wish-list'
import WishListForm from '../../components/WishListForm'

export default
compose(
  getAllCookingTypes,
  getAllCategories,
  getAllRecipes,
  createWishList,
)(WishListForm)