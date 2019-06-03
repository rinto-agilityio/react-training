import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ALL_CATEGORIES = gql`
  {
    getAllCategories {
      id
      name
      imgUrl
    }
  }
`
const GET_ALL_COOKING_TYPES = gql`
  {
    getAllCookingTypes {
      id
      name
    }
  }
`

const GET_RECIPES = gql`
  query {
    getUser {
      favoriteRecipe {
        id
      }
      followCategory {
        recipes {
          id
          title
          imgUrl
          votes
          description
        }
      }
    }
  }
`

const GET_RECIPE_DETAIL = gql`
  query getRecipe($id: String!) {
    getRecipe(id: $id) {
      id
      categoryId
      cookingTypeId
      title
      isDraft
      subTitle
      imgUrl
      description
      views
      votes
      modifyDate
      publishedDate
    }
  }
`

const getAllCookingTypes = graphql(GET_ALL_COOKING_TYPES, {
  props: ({ data = {} }) => {
    const { loading, error, getAllCookingTypes } = data

    return {
      loading,
      error,
      cookingTypes: getAllCookingTypes,
    }
  },
})

const getAllCategories = graphql(GET_ALL_CATEGORIES, {
  props: ({ data = {} }) => {
    const { loading, error, getAllCategories } = data

    return {
      loading,
      error,
      categories: getAllCategories,
    }
  },
})

const getRecipes = graphql(GET_RECIPES, {
  options: () => ({
    fetchPolicy: 'cache-and-network',
  }),

  props: ({ data: { loading, error, getUser } }) => ({
    loading,
    error,
    data: getUser,
  }),
})

const recipeDetail = graphql(GET_RECIPE_DETAIL, {
  options: props => ({
    variables: { id: props.id },
  }),

  props: ({ data }) => {
    const { loading, error, getRecipe } = data

    return {
      loading,
      error,
      getRecipe,
    }
  },
})

export {
  getAllCookingTypes,
  getAllCategories,
  getRecipes,
  recipeDetail,
  GET_RECIPES,
  GET_RECIPE_DETAIL,
}
