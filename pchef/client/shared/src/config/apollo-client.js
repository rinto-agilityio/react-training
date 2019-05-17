import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQLURL,
  request: async operation => {
    const token = await localStorage.getItem('token');

    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
})

export default client
