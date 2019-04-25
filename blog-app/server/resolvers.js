const _ = require('lodash');

const {
  getData,
  setData
} = require('./helpers/index')

const authors = getData('./data/Authors.json')
const posts = getData('./data/Posts.json')

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve users from the "users" array above.
const resolvers = {
  Query: {
    getAuthors: () => {
      return { success: true, message: "Get authors List Success", authors: authors };
    },
    signIn: (parent, args, context, info) => {
      const findUser = _.find(authors, { email: args.email, password: args.password })
      console.log('signIn', args)
      let userRes = {}
      if (findUser) {
        userRes = Object.assign(userRes, {success: true, message: "SignIn Success", author: findUser})
      } else {
        userRes = Object.assign(userRes, {success: true, message: "SignIn Failed", author: null})
      }
      return userRes;
    },

    getPosts: () => {
      return { success: true, message: 'Get Posts success', posts: posts}
    }
  },
  Mutation: {
    createAuthor: (_, { author }) => {

      setData('./data/Authors.json', [...authors, author])

      return {
        success: true,
        message: "Add New Author Success",
        authors: [
          ...authors,
          author
        ]
      };
    },
    createPost: (_, { post }) => {
      return { success: true, message: "Add New Post Success", authors: [...posts, post] };
    }
  }
};

module.exports = { resolvers };
