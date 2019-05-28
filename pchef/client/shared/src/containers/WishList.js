import { compose } from 'react-apollo'

// GraphQL
import { getAllWishList } from '../graphql/wish-list'
import { getAllCategories, getAllCookingTypes } from '../graphql/recipe'
import WishList from '../screens/wish-list/components/WishList'

export default compose(getAllCategories, getAllCookingTypes, getAllWishList)(WishList)
