import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: async operation => {
    const token = await localStorage.getItem('token');
    console.log('token: ', token)

    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
})

export default client
