import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_USER = gql`
  query {
    getUser {
      user {
        name
        avatar
        favoriteRecipe
      }
      ownRecipes {
        id
        title
        imgUrl
        votes
        description
      }
      favoriteRecipe {
        id
        title
        imgUrl
        votes
        description
      }
      followCategory {
        id
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

export { getUser, GET_USER }
