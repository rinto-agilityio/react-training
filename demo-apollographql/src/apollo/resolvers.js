import gql from 'graphql-tag'

export default {
  Mutation: {
    updatePageName: (_, { name }, { cache }) => {

      cache.writeData({
        data: {
          app: {
            __typename: 'ApolloDemo',
            currentPageName: name
          }
        }
      })

      return null
    }
  }
}
