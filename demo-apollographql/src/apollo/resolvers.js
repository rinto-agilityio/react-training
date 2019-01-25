import gql from 'graphql-tag'

export default {
  Mutation: {
    updatePageTitle: (_, { pageTitle }, { cache }) => {

      cache.writeData({
        data: {
          app: {
            __typename: 'ApolloDemo',
            pageTitle: pageTitle
          }
        }
      })

      return null
    }
  }
}
