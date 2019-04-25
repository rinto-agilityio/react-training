import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'

import defaults from './defaults'
import resolvers from './resolvers'
import typeDevs from './typeDevs'

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache,
  clientState: {
    defaults,
    resolvers,
    typeDevs
  },
  connectToDevTools: true
})

export default client
