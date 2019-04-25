import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
// import { ApolloLink } from 'apollo-link';
// import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import resolvers from './resolvers'
import typeDefs from './typeDevs'

const cache = new InMemoryCache();

// Create an http link
const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

// Create a WebSocket link
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true,
  },
});

// Config link
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache,
  link,
  resolvers,
  typeDefs,
});

export default client
