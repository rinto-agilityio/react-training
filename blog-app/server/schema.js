const { gql } = require( 'apollo-server' )

// The GraphQL schema
const typeDefs = gql`
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
    posts: [Post!]
  }

  type Query {
    getAuthors: AuthorsResponse
    signIn(email: String!, password: String!): SignInResponse
    getPostsByAuthor(authorId: ID!): PostResponse
    getPost(id: ID!): Post
  }

  type Mutation {
    signUp(id: ID!, email: String!, password: String!, name: String): SignInResponse

    createPost(
      id: ID!
      title: String!
      content: String!
    ): Post!
  }
`;

module.exports = { typeDefs };
