import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_ALL_WISH_LIST } from './query.graphql'

const CREATE_WISHLIST = gql`
  mutation createWishList(
    $categoryId: String!,
    $cookingTypeId: String!,
    $date: String!
  ) {
    createWishList(
      categoryId: $categoryId,
      cookingTypeId: $cookingTypeId,
      date: $date
    ) {
      id,
      categoryId,
      cookingTypeId,
      date
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
  options: {
    update: (proxy, { data }) => {
      try {
        const { createWishList } = data
        const dataQuery = proxy.readQuery({ query: GET_ALL_WISH_LIST })
        console.log(dataQuery)
        dataQuery.push({
          ...createWishList,
          __typename: 'WishList',
        })
        console.log(dataQuery)
        proxy.writeQuery({ query: GET_ALL_WISH_LIST, data: dataQuery })
      } catch (err) {
        return { error: 'Failed!' }
      }
    },
  },
  withRef: true,
})

export {
  createWishList,
}
