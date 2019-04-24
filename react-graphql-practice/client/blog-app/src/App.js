import React, { Suspense } from 'react';
import './App.css';

import { ApolloProvider } from 'react-apollo'
import client from './apollo'


import AppRoute from './AppRoute'

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Suspense fallback={()=> <p>Loading....</p>}>
          <AppRoute />
        </Suspense>
      </ApolloProvider>
    </div>
  );
}

export default App;
