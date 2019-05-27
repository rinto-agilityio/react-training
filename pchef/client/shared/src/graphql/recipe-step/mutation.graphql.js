import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const TOOGLE_RECIPE = gql`
  mutation userToggleRecipe($recipeId: String!) {
    userToggleRecipe(recipeId: $recipeId) {
      results
    }
  }
`

const userToggleRecipe = graphql(TOOGLE_RECIPE, {
  props: ({ mutate }) => ({
    userToggleRecipe: recipeId => mutate({
      variables: {
        recipeId,
      },
    }),
  }),
  options: {
    update: (proxy, { data }) => {
      try {
        console.log('proxy: ', proxy)
        console.log('data: ', data)
      } catch (err) {
        console.error(err)
      }
    },
  },
})

export {
  userToggleRecipe,
}
