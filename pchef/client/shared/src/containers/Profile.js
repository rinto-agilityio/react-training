import { compose } from 'react-apollo'

// GraphQL
import { getUser } from '../graphql/user'
import { userToggleRecipe, userToggleVote } from '../graphql/user'
import Profile from '../screens/profile'

export default compose(getUser, userToggleRecipe, userToggleVote)(Profile)
