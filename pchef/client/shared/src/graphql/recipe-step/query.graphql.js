import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_RECIPE_STEPS = gql`
  query getAllRecipeSteps($id: String!) {
    getAllRecipeSteps(id: $id) {
      step
      imgUrl
      description
      title
      modifyDate
      publishedDate
    }
  }
`

const GET_USER = gql`
  {
    getUser {
      favoriteRecipe {
        id
      }
    }
  }
`

const getAllRecipeSteps = graphql(GET_RECIPE_STEPS, {
  options: ({ id }) => ({
    variables: { id },
    fetchPolicy: 'cache-and-network',
  }),

  props: ({ data }) => {
    const { loading, error, getAllRecipeSteps } = data

    return {
      recipeSteps: getAllRecipeSteps,
      loading,
      error,
      refetch: () => data.refetch(),
    }
  },
})

const getUser = graphql(GET_USER, {
  options: () => ({
    fetchPolicy: 'cache-and-network',
  }),

  props: ({ data }) => {
    const { loading, error, getUser } = data
    return {
      getUser,
      loading,
      error,
      refetch: () => data.refetch(),
    }
  },
})

export {
  getAllRecipeSteps,
  getUser,
  GET_USER,
}
