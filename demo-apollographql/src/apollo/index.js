import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

import defaults from './defaults'
import resolvers from './resolvers'

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
  clientState: {
    defaults,
    resolvers,
  }
})

export default client