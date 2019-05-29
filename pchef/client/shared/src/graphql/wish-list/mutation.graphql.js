import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_WISHLIST = gql`
  mutation createWishList(
    $categoryId: String!,
    $cookingTypeId: String!,
    $date: String!
  ){
    createWishList(
      categoryId: $categoryId,
      cookingTypeId: $cookingTypeId,
      date: $date
    ){
      id
    }
  }
`

const createWishList = graphql(CREATE_WISHLIST, {
  props: ({ mutate }) => ({
    createWishList: (
      categoryId,
      cookingTypeId,
      date,
    ) => mutate({
      variables: {
        categoryId,
        cookingTypeId,
        date,
      },
    }),
  }),
})

export {
  createWishList,
}
