import React, { Suspense, useState, useEffect } from 'react';

//style
import './App.css';
import './themes/bootstrap/bootstrap.css'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';

import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';

import resolvers from './apollo/resolvers'
import defaults from './apollo/defaults'
import AppRoute from './AppRoute'

function App() {
  const [client, setClient] = useState(null)

  async function createClient() {
    const cache = new InMemoryCache({
      dataIdFromObject: object => {
        switch (object.__typename) {
          //loggedUser is whatever type "me" query resolves to
          case 'loggedUser': return object.__typename;
          default: return object.id || object._id;
        }
      }
    });

    // Create an http link
    const httpLink = createHttpLink({
      uri: 'http://localhost:4000',
    });

    const stateLink = withClientState({
      cache,
      resolvers,
      defaults
    });

    try {
      // See above for additional options, including other storage providers.
      await persistCache({
        cache,
        storage: window.localStorage,
      });
    } catch (error) {
      console.error('Error restoring Apollo cache', error);
    }

    const client = new ApolloClient({
      link: ApolloLink.from([
        httpLink,
        stateLink,
        cache
      ]),
      cache
    });
    setClient(client)
  }

  useEffect(() => {
    createClient()
  },[])
  return !client ? (
    null
  ) : (
    <div className="App">
      <ApolloProvider client={client}>
        <Suspense fallback={()=> <p>Loading....</p>}>
          <AppRoute />
        </Suspense>
      </ApolloProvider>
    </div>
  )
}

export default App
