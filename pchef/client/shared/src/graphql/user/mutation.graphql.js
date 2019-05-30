import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { GET_USER } from './query.graphql'

// Helpers
import {
  checkContainField,
  formatFavoriteRecipe,
  mergeArrayObject,
} from '../../helpers/utils'

const USER_SIGNIN = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
    }
  }
`

const TOGGLE_RECIPE = gql`
  mutation userToggleRecipe($recipeId: String!) {
    userToggleRecipe(recipeId: $recipeId) {
      results
    }
  }
`

const signInUser = graphql(USER_SIGNIN, {
  props: ({ mutate }) => ({
    signInUser: (email, password) => mutate({
      variables: {
        email,
        password,
      },
    }),
  }),
  /**
   * This is sample config updater
   * Use this option to read/write cache
   */
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
        const { getUser: { ownRecipes, favoriteRecipe } } = dataQuery

        const allRecipes = mergeArrayObject(ownRecipes, favoriteRecipe)

        // Get full infomation of result
        const fullResults = allRecipes.filter(recipe => results.includes(recipe.id))

        // Update cache
        const dataUpdated = {
          ...dataQuery,
          getUser: {
            ...dataQuery.getUser,
            favoriteRecipe: fullResults,
          },
        }

        proxy.writeQuery({ query: GET_USER, data: dataUpdated })
      } catch (err) {
        return { error: 'Failed!' }
      }
    },
  },
})

export {
  signInUser,
  userToggleRecipe,
}
