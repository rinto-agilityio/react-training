const { gql } = require('apollo-server')

const typeDefs = gql`
  type Author {
    id: Int!
    name: String!
    avatar: String!
    description: String
    posts: [Post!]!
  }

  type Post {
    id: Int!
    title: String!
    content: String!
    author: Author!
  }

  type Query {
    allAuthors: [Author!]!
    author(id: Int!): Author
    allPosts: [Post!]!
    post(id: Int!): Post
  }

  type Mutation {
    createAuthor(
      name: String!
      avatar: String!
      description: String
    ): Author!

    deleteAuthor(id: Int!): Author!

    createPost(
      authorId: Int!
      title: String!
      content: String!
    ): Post!

    deletePost(id: Int!): Post!
  }
`

module.exports = typeDefs