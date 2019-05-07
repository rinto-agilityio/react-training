const { gql } = require('apollo-server')

// The GraphQL schema
module.exports  = gql`
  type Author {
    id: ID!
    name: String
    email: String
    password: String
    avatar: String
    posts: [Post!]!
  }

  type Post {
    id: ID
    title: String!
    content: String!
    author: Author!
    cursor: String!
  }

  input AuthorInput {
    id: ID!
    name: String!
    email: String
    password: String
  }


  interface QueryResponse {
    success: Boolean!
    message: String!
  }

  type AuthorsResponse implements QueryResponse {
    success: Boolean!
    message: String!
    authors: [Author!]
  }

  type SignInResponse implements QueryResponse {
    success: Boolean!
    message: String!
    author: Author!
  }

  type PostResponse implements QueryResponse {
    success: Boolean!
    message: String!
    totalCount: Int!
    pageInfo: PageInfo!
    posts: [Post!]
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
  }

  type Query {
    getAuthors: AuthorsResponse
    signIn(email: String!, password: String!): SignInResponse
    getPostsByAuthor(authorId: ID!, after: String, first: Int): PostResponse
    getPost(id: ID!): Post
  }

  type Mutation {
    signUp(id: ID!, email: String!, password: String!, name: String): SignInResponse

    createPost(
      id: ID!
      title: String
      content: String
      authorId: ID!
    ): Post!
  }

  type Subscription {
    postAdded: Post
  }
`;

