import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_USER } from './query.graphql'
import { checkContainField, formatFavoriteRecipe, formatAddFiledObject } from '../../helpers/utils'
import { GET_RECIPE_DETAIL } from '../recipe/query.graphql'

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
          results: checkContainField(favoriteRecipe, recipeId) ?
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
            ...dataQuery.getUser,
            favoriteRecipe: formatAddFiledObject(results),
          },
        }
        proxy.writeQuery({ query: GET_USER, data: dataUpdated })
      } catch (err) {
        console.error(err)
      }
    },
  },
})

const userToggleVote = graphql(TOGGLE_VOTE, {
  props: ({ mutate }) => ({
    userToggleVote: (recipeId, votes, userId) => mutate({
      variables: {
        recipeId,
      },
      optimisticResponse: {
        userToggleVote: {
          __typename: 'Recipe',
          results: checkContainField(votes, userId) ?
            votes.filter(item => item !== userId)
            :
            votes.concat(userId),
        },
      },
    }),
  }),
  options: ({ id }) => ({
    update: (proxy, { data }) => {
      const {
        userToggleVote: { results },
      } = data
      try {
        const dataQuery = proxy.readQuery({ query: GET_RECIPE_DETAIL, variables: { id } })
        const dataUpdated = {
          ...dataQuery,
          getRecipe: {
            ...dataQuery.getRecipe,
            votes: results,
          },
        }
        proxy.writeQuery({ query: GET_RECIPE_DETAIL, variables: { id }, data: dataUpdated })
      } catch (err) {
        console.error(err)
      }
    },
  }),
})

export {
  userToggleRecipe,
  userToggleVote,
}
