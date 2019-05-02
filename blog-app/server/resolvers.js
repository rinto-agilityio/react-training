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
      let userRes = {}
      if (findUser) {
        userRes = Object.assign(userRes, {success: true, message: "SignIn Success", author: findUser})
      } else {
        userRes = Object.assign(userRes, {success: true, message: "SignIn Failed", author: null})
      }
      return userRes;
    },

    getPostsByAuthor: (parent, args) => {
      console.log('run.........')

      const postsOfAuthor =  posts.filter(post => post.author.id == args.authorId)

      return { success: true, message: 'Get Posts success', posts: postsOfAuthor}
    }
  },
  Mutation: {
    signUp: (parent, args) => {
      const author =  {
        id: args.id,
        email: args.email,
        password: args.password,
        name: args.name
      }

      setData('./data/Authors.json', [...authors, author])

      return {
        success: true,
        message: "Add New Author Success",
        author: author
      };
    },
    createPost: (_, args) => {
      const author = authors.find(author => author.id == args.authorId)
      const newPost = {
        id: args.id,
        title: args.title,
        content: args.content,
        author: author
      }

      setData('./data/Posts.json', [...posts, newPost])

      return  newPost
    }
  }
};

module.exports = { resolvers };
