// Libs
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ALL_WISH_LIST = gql`
  {
    getAllWishList {
      id
      categoryId
      cookingTypeId
      date
    }
  }
`

const getAllWishList = graphql(GET_ALL_WISH_LIST, {
  props: ({ data = {} }) => {
    const { getAllWishList, loading, error } = data

    return {
      loading,
      error,
      wishList: getAllWishList,
    }
  },
})

export { getAllWishList }
