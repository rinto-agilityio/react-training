export default {
  Mutation: {
    updatePageTitle: (_, { pageTitle }, { cache }) => {

      cache.writeData({
        data: {
          app: {
            __typename: 'ApolloDemo',
            pageTitle,
          }
        }
      })

      return null
    }
  }
}
