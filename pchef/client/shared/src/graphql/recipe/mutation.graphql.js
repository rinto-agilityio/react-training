import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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
      optimisticResponse: {
        createRecipeStep: {
          step,
          title,
          __typename: 'RecipeStep',
        },
      },
    }),
  }),
})

export {
  createRecipe,
  createRecipeStep,
}
