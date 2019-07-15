// Libs
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// GraphQL
import { GET_USER } from './query.graphql'
import { TOGGLE_VOTE, TOGGLE_RECIPE } from '../recipe-step/mutation.graphql'

// Helpers
import {
  checkContainField,
  formatFavoriteRecipe,
  mergeArrayObject,
  formatFiledOnObject,
  updateArrayById,
  checkContain,
} from '../../helpers/utils'

const USER_SIGNIN = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
    }
  }
`

const USER_TOGGLE_CATEGORY = gql`
  mutation userToggleCategory($categoryId: [String]!) {
    userToggleCategory(categoryId: $categoryId) {
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

const userToggleCategory = graphql(USER_TOGGLE_CATEGORY, {
  props: ({ mutate }) => ({
    userToggleCategory: categoryId => mutate({
      variables: { categoryId },
    }),
  }),
  options: {
    update: (proxy, { data }) => {
      try {
        const {
          userToggleCategory: { results },
        } = data
        const dataQuery = proxy.readQuery({ query: GET_USER })
        const dataUpdated = {
          ...dataQuery,
          getUser: {
            ...dataQuery.getUser,
            followCategory: formatFiledOnObject(results, 'Category'),
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
          __typename: 'PayloadResults',
          results: checkContain(votes, userId) ?
            votes.filter(item => item !== userId)
            :
            votes.concat(userId),
          recipeId,
        },
      },
    }),
  }),
  options: () => ({
    update: (proxy, { data }) => {
      const {
        userToggleVote: { results, recipeId },
      } = data
      try {
        const dataQuery = proxy.readQuery({ query: GET_USER })
        const { getUser: { ownRecipes, favoriteRecipe } } = dataQuery

        const favoritesUpdating = updateArrayById(favoriteRecipe, recipeId, results)
        const ownRecipesUpdating = updateArrayById(ownRecipes, recipeId, results)

        const dataUpdated = {
          ...dataQuery,
          getUser: {
            ...dataQuery.getUser,
            favoriteRecipe: favoritesUpdating,
            ownRecipes: ownRecipesUpdating,
          },
        }

        proxy.writeQuery({ query: GET_USER, data: dataUpdated })
      } catch (err) {
        console.error(err)
      }
    },
  }),
})

export {
  signInUser,
  userToggleCategory,
  userToggleRecipe,
  userToggleVote,
}
