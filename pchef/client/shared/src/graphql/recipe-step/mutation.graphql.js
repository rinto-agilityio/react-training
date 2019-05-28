import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_USER } from './query.graphql'
import { checkContain, formatFavoriteRecipe, formatUserToggleSaveRes } from '../../helpers/utils'

const TOGGLE_RECIPE = gql`
  mutation userToggleRecipe($recipeId: String!) {
    userToggleRecipe(recipeId: $recipeId) {
      results
    }
  }
`

const TOGGLE_VOTE = gql`
  mutation userToggleVote($recipeId: String!) {
    userToggleVote(recipeId: $recipeId) {
      results
    }
  }
`

const userToggleRecipe = graphql(TOGGLE_RECIPE, {
  props: ({ mutate }) => ({
    userToggleRecipe: (recipeId, favoriteRecipe) => mutate({
      variables: {
        recipeId,
      },
      optimisticResponse: {
        userToggleRecipe: {
          __typename: 'PayloadResults',
          results: checkContain(favoriteRecipe, recipeId) ?
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
        const dataQuery = proxy.readQuery({ query: GET_USER })
        const dataUpdated = {
          ...dataQuery,
          getUser: {
            favoriteRecipe: formatUserToggleSaveRes(results),
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

const userToggleVote = graphql(TOGGLE_RECIPE, {
  props: ({ mutate }) => ({
    userToggleVote: recipeId => mutate({
      variables: {
        recipeId,
      },
    }),
  }),
  options: {
    update: (proxy, { data }) => {
      try {
        console.log('proxy', proxy);
        console.log('data', data);
      } catch (err) {
        console.error(err)
      }
    },
  },
})

export {
  userToggleRecipe,
  userToggleVote,
}
