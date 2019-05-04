import React, { Suspense, useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'

//style
import './App.css';
// import './themes/bootstrap/bootstrap.css'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, split } from 'apollo-link';
import { onError } from "apollo-link-error";
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

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
          case 'PostResponse': return object.__typename;
          default: return object.id || object._id;
        }
      }
    });

    const httpLink = createHttpLink({
      uri: "http://localhost:4000/graphql"
    });

    const wsLink = new WebSocketLink({
      uri: "ws:localhost:4000/graphql",
      options: {
        reconnect: true
      }
    });

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link = split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink,
    );

    const error = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors)
      }

      if (networkError) {
        console.log(networkError)
      }

    })
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

    // const defaultOptions = {
    //   watchQuery: {
    //     fetchPolicy: 'cache-and-network',
    //     errorPolicy: 'all',
    //   },
    //   query: {
    //     fetchPolicy: 'cache-and-network',
    //     errorPolicy: 'all',
    //   },
    //   mutate: {
    //     errorPolicy: 'all',
    //   },
    // };

    const client = new ApolloClient({
      link: ApolloLink.from([
        error,
        link,
        stateLink,
        cache
      ]),
      cache,
      // defaultOptions,
      connectToDevTools: true
    });

    //update state
    setClient(client)
  }

  useEffect(() => {
    createClient()
  },[])

  return !client ? (
    <div className='wrap-loading'>
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <div className="App">
      <ApolloProvider client={client}>
        <Suspense fallback={()=> <Spinner animation="border" variant="primary" />}>
          <AppRoute />
        </Suspense>
      </ApolloProvider>
    </div>
  )
}

export default App
