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

const getAllCookingTypes = graphql(GET_ALL_COOKING_TYPES, {
  props: ({ data = {} }) => {
    const { loading, error, getAllCookingTypes } = data

    return {
      loading,
      error,
      data: getAllCookingTypes,
    }
  },
})

const getAllCategories = graphql(GET_ALL_CATEGORIES, {
  props: ({ data = {} }) => {
    const { loading, error, getAllCategories } = data

    return {
      loading,
      error,
      data: getAllCategories,
    }
  },
})

export {
  getAllCookingTypes,
  getAllCategories,
}
