import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createRtdbLink } from 'apollo-link-firebase';
import { InMemoryCache } from 'apollo-cache-inmemory';
import firebase from '@configs/firebase';
import AppRouter from '@router/index';

// create Realtime Database link
const rtdbLink = createRtdbLink({
  database: firebase.database(),
});

// create client
const client = new ApolloClient({
  link: rtdbLink,
  cache: new InMemoryCache(),
});

// app
const App = () => (
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>
);

export default App;
