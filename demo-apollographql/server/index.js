const { ApolloServer, gql } = require('apollo-server');
const { find, filter } = require('lodash');

// Data from database
const { authors, posts } = require('./db');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Post" type can be used in other type declarations.
  type Post {
    id: Int!,
    title: String,
    content: String,
    author: Author
  }

  type Author {
    id: Int!,
    name: String,
    photo: String,
    desc: String,
    posts: [Post]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    posts: [Post],
    authors: [Author],
    author(id: Int!): Author
  }
`;

const resolvers = {
  Query: {
    posts: () => posts,
    authors: () => authors,
    author: (_, { id }) => find(authors, { id: id }),
  },
  Post: {
    author: (post) => find(authors, { id: post.authorId })
  },
  Author: {
    posts: (author) => filter(posts, { authorId: author.id })
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
