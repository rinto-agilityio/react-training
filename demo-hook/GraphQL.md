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

TODO:
- Learning [Apollo](https://www.apollographql.com/)
- [ ] Learning Apollo Server then create simple GraphQL server with data models
- [ ] Learning Apollo Client to apply to React app

