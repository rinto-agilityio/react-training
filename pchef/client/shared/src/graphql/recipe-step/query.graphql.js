import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_RECIPE_STEPS = gql`
  query getAllRecipeSteps($id: String!) {
    getAllRecipeSteps (id: $id) {
      step
      imgUrl
      description
      title
      modifyDate
      publishedDate
    }
  }
`

const getAllRecipeSteps = graphql(GET_RECIPE_STEPS, {
  options: props => ({
    variables: { id: props.id },
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

export {
  getAllRecipeSteps,
}
