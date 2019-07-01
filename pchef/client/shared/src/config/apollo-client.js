import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQLURL,
  fetch,
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
