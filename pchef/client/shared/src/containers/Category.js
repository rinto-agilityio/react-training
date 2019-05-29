import { compose } from 'react-apollo'

// import graphQL query + component
import { getCategory } from '../graphql/category'
import CategoryScreen from '../screens/category'

export default compose(getCategory)(CategoryScreen)
