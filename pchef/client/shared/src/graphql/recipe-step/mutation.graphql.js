import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_USER } from './query.graphql'
import { checkFavorited, formatFavoriteRecipe } from '../../helpers/utils'

const TOOGLE_RECIPE = gql`
  mutation userToggleRecipe($recipeId: String!) {
    userToggleRecipe(recipeId: $recipeId) {
      results
    }
  }
`

const userToggleRecipe = graphql(TOOGLE_RECIPE, {
  props: ({ mutate }) => ({
    userToggleRecipe: (recipeId, favoriteRecipe) => mutate({
      variables: {
        recipeId,
      },
      optimisticResponse: {
        userToggleRecipe: {
          __typename: 'PayloadResults',
          results: checkFavorited(favoriteRecipe, recipeId) ?
            formatFavoriteRecipe(favoriteRecipe.filter(item => item.id !== recipeId))
            :
            formatFavoriteRecipe(favoriteRecipe).concat(recipeId),
        },
      },
    }),
  }),
  options: {
    update: (proxy, { data }) => {
      try {
        const {
          userToggleRecipe: { results },
        } = data
        // format data results return from userToggleRecipe mutation
        const newResults = results.map(item => Object.assign({ id: item, __typename: 'Recipe' }))
        const dataQuery = proxy.readQuery({ query: GET_USER })
        const dataUpdated = {
          ...dataQuery,
          getUser: {
            favoriteRecipe: newResults,
            __typename: 'UserFullInfos',
          },
        }
        proxy.writeQuery({ query: GET_USER, data: dataUpdated })
      } catch (err) {
        console.error(err)
      }
    },
  },
})

export {
  userToggleRecipe,
}
