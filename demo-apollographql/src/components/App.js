import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'


const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
})

client
  .query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `
  })
  .then(results => console.log(results))


const App = () => (
  <ApolloProvider client={client}>
    <h1>React App</h1>
  </ApolloProvider>
)

export default App;
