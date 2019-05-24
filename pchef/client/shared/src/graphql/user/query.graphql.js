import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_USER = gql`
  query {
    getUser {
      user {
        name
        avatar
      }
      followCategory {
        name
        imgUrl
      }
      favoriteRecipe {
        title
        imgUrl
        votes
        description
      }
    }
  }
`

const getUser = graphql(GET_USER, {
  props: ({ data: { loading, error, getUser } }) => ({
    loading,
    error,
    data: getUser,
  }),
})

export { getUser }
