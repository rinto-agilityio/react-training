import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_USER = gql`
  {
    userInfo {
      user: {
        name
        email
        avatar
      }
      followCategory: {
        name
        imgUrl
      }
      favoriteRecipe: {
        title
        imgUrl
        votes
      }
    }
  }
`

const getUser = graphql(GET_USER, {
  options: token => ({
    variables: { token },
  }),
})

export { getUser }
