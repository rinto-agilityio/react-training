import { compose } from 'react-apollo'

// GraphQL
import { userToggleRecipe, userToggleVote } from '../../../../graphql/user'
import Recipe from '../../components/Recipe'

export default compose(userToggleRecipe, userToggleVote)(Recipe)
