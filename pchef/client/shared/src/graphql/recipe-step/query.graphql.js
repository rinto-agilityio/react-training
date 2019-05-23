import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_RECIPE_STEP = gql`
  query getRecipeStep($id: String!) {
    getRecipeStep (id: $id) {
      step
      imgUrl
      description
    }
  }
`

const getRecipeStep = graphql(GET_RECIPE_STEP, {
  options: props => ({
    variables: { id: props.id },
    fetchPolicy: 'cache-and-network',
  }),

  props: ({ data }) => {
    const { loading, error, getRecipeStep } = data
    return {
      stepInfo: getRecipeStep,
      loading,
      error,
      refetch: () => data.refetch(),
    }
  },
})

export {
  getRecipeStep,
}
