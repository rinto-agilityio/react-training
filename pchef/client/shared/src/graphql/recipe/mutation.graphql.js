import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { GET_RECIPES } from './query.graphql'
import { TOGGLE_VOTE } from '../recipe-step/mutation.graphql'

// Helpers
import {
  checkContainField,
  formatFavoriteRecipe,
  formatFiledOnObject,
  checkContain,
} from '../../helpers/utils'

const CREATE_RECIPE = gql`
  mutation createRecipe(
    $categoryId: String!,
    $cookingTypeId: String!,
    $title: String!,
    $subTitle: String,
    $imgUrl: String,
    $description: String,
    $isDraft: Boolean! = true,
  ) {
    createRecipe(
      categoryId: $categoryId,
      cookingTypeId: $cookingTypeId,
      title: $title,
      subTitle: $subTitle,
      imgUrl: $imgUrl,
      description: $description,
      isDraft: $isDraft,
    ) {
      id
    }
  }
`

const CREATE_RECIPE_STEP = gql`
  mutation createRecipeStep(
    $recipeId: String!,
    $title: String!,
    $step: Int!,
    $imgUrl: String,
    $description: String,
  ) {
    createRecipeStep(
      recipeId: $recipeId,
      title: $title,
      step: $step,
      imgUrl: $imgUrl,
      description: $description,
    ) {
      id
      step
      title
    }
  }
`

const PUBLISH_RECIPE = gql`
  mutation publishRecipe($id: String!) {
    publishRecipe(id: $id) {
      id
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

const createRecipe = graphql(CREATE_RECIPE, {
  props: ({ mutate }) => ({
    createRecipe: (
      categoryId,
      cookingTypeId,
      title,
      subTitle,
      imgUrl,
      description,
      isDraft,
    ) => mutate({
      variables: {
        categoryId,
        cookingTypeId,
        title,
        subTitle,
        imgUrl,
        description,
        isDraft,
      },
    }),
  }),
})

const publishRecipe = graphql(PUBLISH_RECIPE, {
  props: ({ mutate }) => ({
    publishRecipe: id => mutate({
      variables: { id },
    }),
  }),
  withRef: true,
})

const createRecipeStep = graphql(CREATE_RECIPE_STEP, {
  props: ({ mutate }) => ({
    createRecipeStep: (
      recipeId,
      title,
      step,
      imgUrl,
      description,
    ) => mutate({
      variables: {
        recipeId,
        title,
        step,
        imgUrl,
        description,
      },
    }),
  }),
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

        const dataQuery = proxy.readQuery({ query: GET_RECIPES })
        const dataUpdated = {
          ...dataQuery,
          getUser: {
            ...dataQuery.getUser,
            favoriteRecipe: formatFiledOnObject(results),
            __typename: 'UserFullInfos',
          },
        }
        proxy.writeQuery({ query: GET_RECIPES, data: dataUpdated })
      } catch (err) {
        return { error: 'Failed!' }
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
        const dataQuery = proxy.readQuery({ query: GET_RECIPES })
        const { getUser: { followCategory } } = dataQuery

        const currentCategory = followCategory.find(category => (
          category.recipes.find(recipe => recipe.id === recipeId)
        ))

        const followCategoryUpdated = followCategory.map(category => (
          category.id === currentCategory.id ?
            {
              ...category,
              recipes: category.recipes.map(recipe => (
                recipe.id === recipeId ?
                  {
                    ...recipe,
                    votes: results,
                  } : recipe
              )),
            }
            : category
        ))

        const dataUpdated = {
          ...dataQuery,
          getUser: {
            ...dataQuery.getUser,
            followCategory: followCategoryUpdated,
          },
        }

        proxy.writeQuery({ query: GET_RECIPES, data: dataUpdated })
      } catch (err) {
        console.error(err)
      }
    },
  }),
})

export {
  createRecipe,
  createRecipeStep,
  userToggleRecipe,
  publishRecipe,
  userToggleVote,
}
