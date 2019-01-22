import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

// Components
import { Query } from 'react-apollo'


const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
})

const QUERY_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const ExchangeRates = () => (
  <Query
    query={QUERY_RATES}
    // pollInterval={5000}
    notifyOnNetworkStatusChange
  >
    {( {loading, error, data, refetch, networkStatus }) => {
      if (networkStatus === 4) return "Refetching"
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error !!!</p>

      return (
        <>
          <button onClick={() => refetch()}>refetch!</button>
          {data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>{currency}: {rate}</p>
            </div>
          ))}
        </>
      )
    }}
  </Query>
)

const App = () => (
  <ApolloProvider client={client}>
    <h1>React App</h1>
    <ExchangeRates />
  </ApolloProvider>
)

export default App;
