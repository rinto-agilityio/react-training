# GraphQL Training Logs

## Day 1

Watch videos and read documents for all sections of [How to GraphQL](https://www.howtographql.com/basics/0-introduction/) to get the core concepts:
1. Introduction
    - A query language for APIs - not database

2. GraphQL is the better REST
    - Send single query to GraphQL server includes the concrete data requirements instead of fetching data to multiple endpoints (REST)
    - Avoid download superfluous data from API

3. Core Concepts
    - GraphQL has its own type system that’s used to define the schema of an API, called Schema Definition Language (SDL)
    - Root types: 
      - Query: Fetching data
      - Mutation: Writing/updating data
      - Subscription: Realtime update

4. Big Picture - Architecture for app with GraphQL:
    - Server:
      - Server with connected database
      - Layer that integration existing systems
      - Hybrid approach with connected DB and integration of existing system

    - Client:
      - Describe data requirements
      - Display data on UI

- Play around [Launchpad GraphQL](https://launchpad.graphql.com/new)
- Read [Thinking in Graphs](https://graphql.org/learn/thinking-in-graphs/) to get the overview and business logic
    - With GraphQL, you model your business domain as a graph
    - On the client: this creates a pattern similar to Object-Oriented Programming: types that reference other type
    - On the server: since GraphQL only defines the interface, you have the freedom to use it with any backend

- Front-end benefits if use GraphQL:
    - Describer the shape of object we want to receive from the server
    - Reducing request send to server
    - Reducing payload size


## Day 2
Learning GraphQL follow [official document](https://graphql.org/learn/)

1. Introduction
2. Queries and Mutations
    - Fields:
      - Syntax: For query, similar to JSON object structure
      - The same shape as the result
      - Can make a sub-selection of fields for object to get related data in one request
    - Arguments:
      - Every field and nested object can its own set of arguments to replacement for making multiple API fetches
      - Arguments can be of many different types
    - Aliases:
      - Rename result of a field to anything we want
    - Fragments:
      - Use to construct set of fields, then include in queries
      - Support argument inside fragment
    - Operation name:
      - Make our code more semantic
    - Variables:
      - Seperate dynamic arguments from query
      - Support default variable value
    - Directives:
      - Can be attached to field or fragment, affect execution of the query
      - Support 2 directives: @include and @skip

    - Mutations:
      - While query fields are executed in parallel, mutation fields run in series, one after the other.

    - Inline Fragments:
      - Syntax: `...on [type]`
      - Meta fields: `__type`

3. Schemas and Types
    - Type system:
      - The shape of a GraphQL query closely matches the results, we can predict what the query will return
    - Type language:
      - GraphQL schema language: Similar to the query language
    - Object types and fields:
      - Basic component in GraphQL is object type
    - Arguments
    - The Query and Mutation types
    - Scalar types:
      - The field don't have any sub-fields
    - Enumetaion types
    - List and non-null
    - Interfaces
      - An abstract type that includes a certain set of fields
    - Union types

4. Validation
    - A fragment can't refer to itself or create a cycle
    - Have to query for a field that exists on the given type
    - If query for a field not a scalar or an enum, we need to specify what data we want to get back from the field

5. Execution
    - GraphQL can't execute a query without a type system
    - Each field on each type is backed by a function called the resolver which is provided by the GraphQL server developer
    - GraphQL queries always end at scalar values

6. Introspection
    - Query schema types
    - Can access the documentation about the type system using introspection

Read Best Practice secion:
    - [Serving over HTTP](https://graphql.github.io/learn/serving-over-http/)
      - Web Request: GraphQL should be placed after all authentication middleware, so that you have access to the same session and user information you would in your HTTP endpoint handlers
      - Response: `{ "data": {...}, "errors": [...]}`
      - Development mode: Use GraphiQL for testing and development
    - [Authorization](https://graphql.github.io/learn/authorization/)
      - Should happen in the bussiness logic layer instead
    - [Pagination](https://graphql.github.io/learn/pagination/)
      - **cursor-based pagination** is the most powerful of those designed
    - [Caching](https://graphql.github.io/learn/caching/)

## Day 3:

Learning [Apollo GraphQL](https://www.apollographql.com/)

- [Introducing the Apollo GraphQL Platform](https://blog.apollographql.com/introducing-the-apollo-graphql-platform-8ef34bb269e5)
    - Core technology: Open source, implements the GraphQL sepc and standard resolved-based programming models: Apollo Client and Server
    - Service: Design for large-scale enterprise environments
    - Support GraphQL gateway: Composes separately deployed “micro-schemas” that reference each other into a single master schema, which looks to a client just like any regular GraphQL schema.

- [The Apollo GraphQL platform](https://www.apollographql.com/docs/intro/platform.html)
    - An implementation of GraphQL designed
    - Best used as a new layer between services and app
    - Workflows:
      - Managing GraphQP API:
        - Schema change validation
        - Safelisting

- [Why GraphQL](https://www.apollographql.com/docs/intro/benefits.html)
    - Developer experience
      - Explore your API: Integrated tools:
        - Automatic documentation, autocomplete and more
        - GraphQL Playground: An IDE featuring automatically generated docs for your schema and query execution with autocomplete
        - Apollo DevTools: Chrome extenstion
      - Simplify front-end code:
        - Setup almost things for front-end for fetching, loading, normalizing data with single request
      - Modern tooling
    - Declarative data fetching:
      - Combining and filtering the data while returning exactly what we ask for
      - Apollo Client takes care of the request cycle from start to finish, including tracking loading and error states for you. All you have to do is describe the data your component needs and let Apollo Client do the heavy lifting
    - Improved performance:
      - Smaller payloads: Because combining and filter data fetching
      - Avoid round trips: Only do single reqeust with nested data instead of call multiple RESTful API endpoints

- [x] Learning Apollo Server then create simple GraphQL server with data models
    - Create simple GraphQL server follow [this document](https://www.apollographql.com/docs/apollo-server/essentials/schema.html)

Relative articles:
    - [Reducing our Redux code with React Apollo](https://blog.apollographql.com/reducing-our-redux-code-with-react-apollo-5091b9de9c2a)
    - [Local state management](https://www.apollographql.com/docs/react/essentials/local-state.html)
      - Updating local data:
        - Direct writes: Similar to `setState` in react
        - Resolvers
    - [GraphQL Concepts Visualized](https://blog.apollographql.com/the-concepts-of-graphql-bc68bd819be3)


## Day 4:
- Learning [Apollo Client](https://www.apollographql.com/docs/react/)
    - Introduction
    - Why Apollo Clients?
      - Data fetching:
        -  All of the logic for retrieving your data, tracking loading and error states, and updating your UI is encapsulated in a single `<Query>` component
      - Zero-config caching
      - Combine local & remote data:
        - Via `apollo-link-state`
        - Syntax on client query is `@client` at the field want to combine
      - Vibrant ecosystem

- Apollo Client for React:
    - Queries:
      - Fetching data
      - Polling and refetching: To get fresh data from server (sometime data from cache is out of sync)
      - API & props:
        - query: A GraphQL query document
        - pollInterval: Interval component poll data
        - loading: Loading status
        - networkStatus: Detail state of network request
        - refetch: Refetching data from Query
        - client: ApolloClient instance. Required
      - Do example `<Query>` component with CRA follow [Getting Startted](https://www.apollographql.com/docs/react/essentials/get-started.html)

    - Mutations:
      - Updating cache:
        - Adding items and deleting to a list, need to update cache for Query
        - Update cache via `cache.writeQuery`
        - Don't need to update for single item
      - Loading and error state
      - API & props:
        - mutation: A GraphQL mutation document
        - update: Update cache after mutation
        - client: Use to update cache: `client.writeData` and `client.readQuery`

    - Local state management:
      - Updating local data:
        - Direct writes: `client.writeData`
        - Resolvers
      - Querying local data
        - Similar to querying GraphQL server, only different is add a `@client` directive on a local fields

    - Error Handling:
      - Error policies:
        - By default, any GraphQL Errors as network errors and end the request chain, don't save any data to the cache. Also render UI with `error` prop
        - Other options for errorPolicy are: `none`, `ignore`, `all`


## Day 5: (Doing practice)
- Read articles:
    - Why GraphQL: Advantages, Disadvantages & Alternatives [Part1](https://www.robinwieruch.de/why-graphql-advantages-disadvantages-alternatives/) and [Part2](https://www.robinwieruch.de/why-apollo-advantages-disadvantages-alternatives/)
    - [Confused when Apollo abandoned Redux](https://github.com/apollographql/apollo-client/issues/2593)
    - [apollo-link-state](https://www.apollographql.com/docs/link/links/state.html)
      - Store for local data
    - [The future of state management](https://blog.apollographql.com/the-future-of-state-management-dd410864cae2)

## Day 6: (Doing practice)
- Read articles:
    - [Life Without Redux: Using Apollo for Local State](https://medium.com/the-notice-board/life-without-redux-using-apollo-for-local-state-d32b020ff4d3)
    - [Local state management](https://www.apollographql.com/docs/react/essentials/local-state.html)

## Day 7: (Doing practice) Implement app structure
- Read aritcles:
    - [Use a render prop](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
    - [Tutorial: Render Props in React Apollo 2.1](https://www.prisma.io/blog/tutorial-render-props-in-react-apollo-2-1-199e9e2bd01e)
    - [The Problem with HTML in React and GraphQL](https://medium.com/@wonderboymusic/the-problem-with-html-in-react-and-graphql-6af9789352f6)
    - [Boilerplate for a Basic Fullstack GraphQL App with React](https://github.com/nikolasburk/react-apollo-tutorial)
    - [Organization structure for fragment composition in large react-apollo apps](https://stackoverflow.com/questions/48017187/organization-structure-for-fragment-composition-in-large-react-apollo-apps)


## Open questions:

1. What's benefits of GraphQL?
```
  - Resolved overfetching
  - Optimize re-structure data shape on client-side
  - Wrapping data structure inside component
```

2. App size with GraphQL?
```
  - Good for large scale app
```

3. Front-end design data structure want to get:
    a, Good points:
    ```
      - Don't need to re-structure data structure return from api.
      - Reduce payload for unnecessary fields
      - Don't need smart component (Container in Redux pattern)
    ```
    b, Bad points:
    ```
      - Parent component don't know Childrent component can request data from api or not, or maybe data fetching duplicate with similar component
    ```
    c, Conflict team coding with Back-end?
    ```
      Front-end maybe request fields didn't support by GraphQL API
    ```

4. Is there any case duplicate container?
```
I don't think duplicate container.
```

5. How Apollo manage data, source truth?
```
Single source of truth for **all data** in our client application
```

6. Can Apollo integration with Redux? Or other lib?
```
Yes, it can, but don't need to use Redux or MobX. Apollo Client support to manage remote and local data from GraphQL server (with apollo-link-state)
```
