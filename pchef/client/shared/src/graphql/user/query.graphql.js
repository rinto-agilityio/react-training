import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Token
const token = localStorage.getItem('token')

const GET_USER = gql`
  query GetUser($token: String!) {
    getUser(token: $token) {
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
  options: () => ({
    variables: {
      token,
    },
  }),
  props: ({ data }) => {
    const { loading, error, getUser } = data

    return {
      loading,
      error,
      data: getUser,
    }
  },
})

export { getUser }
