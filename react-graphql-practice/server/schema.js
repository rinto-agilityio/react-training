const { gql } = require( 'apollo-server' )

// The GraphQL schema
const typeDefs = gql`
  type Author {
    id: ID!
    name: String
    email: String
    posts: [Post!]!
  }

  type Post {
    id: ID
    title: String!
    content: String!
    author: Author!
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

  type PostResponse implements QueryResponse {
    success: Boolean!
    message: String!
    posts: [Post!]
  }

  type Query {
    getAuthors: AuthorsResponse
    getAuthor(id: ID!): Author
    getPosts: PostResponse
    getPost(id: ID!): Post
  }

  type Mutation {
    createAuthor (
      name: String!
      email: String!
      password: String
    ): Author!

    createPost(
      id: ID!
      title: String!
      content: String!
    ): Post!
  }
`;

module.exports = { typeDefs };
