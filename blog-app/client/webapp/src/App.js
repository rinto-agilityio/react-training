import React, { Suspense } from 'react';
import { ApolloProvider } from 'react-apollo';

//compnents
import AppRoute from './AppRoute';
import Indicator from './components/commons/Indicator';

import client from './apollo';

import './App.css';

const App = () => (
  <div className="App">
    <ApolloProvider client={client}>
      <Suspense
        fallback={<Indicator />}
      >
        <AppRoute />
      </Suspense>
    </ApolloProvider>
  </div>
);

export default App;
