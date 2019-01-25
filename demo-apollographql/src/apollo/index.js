import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { withClientState } from 'apollo-link-state'

// ApolloGraphQL Config
const defaults = {
  app: {
    __typename: 'ApolloDemo',
    currentPageName: 'Apollo Demo'
  }
}

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults,
})


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
  link: ApolloLink.from([
    stateLink
  ])
})

export default client
