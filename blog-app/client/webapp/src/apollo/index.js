import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const cache = new InMemoryCache();

let apiUrl = process.env.REACT_APP_LOCAL_GRAPHQL_SERVER_URL
// Create http link
const httpLink = createHttpLink({
  uri: apiUrl,
  fetch: fetch
});

// Create WebSocket link
const wsLink = new WebSocketLink({
  uri: `ws:// ${apiUrl}`,
  options: {
    reconnect: true
  }
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,
  connectToDevTools: true
});

cache.writeData({
  data: {
    loggedUser: JSON.parse(localStorage.getItem('userLoged')) || null
  }
});

export default client;
