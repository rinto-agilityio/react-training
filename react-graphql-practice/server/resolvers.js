const { posts, authors } = require( './mockData' )

  // Resolvers define the technique for fetching the types in the
  // schema.  We'll retrieve users from the "users" array above.
  const resolvers = {
  Query: {
    getAuthors: () => {
      console.log('authors', authors)
      return { success: true, message: "Get authors List Success", authors: authors };
    },
    getAuthor: (_, { id }) => authors.find(author => author.id === id),

    getPosts: () => {
      return { success: true, message: 'Get Posts success', posts: posts}
    }
  },
  Mutation: {
    createAuthor: (_, { author }) => {
      return { success: true, message: "Add New Author Success", authors: [...author, author] };
    },
    createPost: (_, { post }) => {
      return { success: true, message: "Add New Post Success", authors: [...posts, post] };
    }
  }
};

module.exports = { resolvers };
