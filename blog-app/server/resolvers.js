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
      const { first, after } = args

      const postWithAuthor = posts.filter(post => post.author.id == args.authorId)
      const totalCount = postWithAuthor.length;
      if (first < 0) {
        throw ('First must be positive');
      }

      let start = 0;

      if (after) {
        const buff = new Buffer(after, 'base64');
        const id = buff.toString('ascii');

        const index = postWithAuthor.findIndex((post) => post.id === id);

        if (index === -1) {
          throw ('After does not exist');
        }

        start = index + 1;
      }

      const postsList = first === undefined ?
        postWithAuthor :
        postWithAuthor.slice(start, start + first);

      let endCursor = '';

      const postsPagination = postsList.map(post => {
        const buffer = new Buffer(post.id);
        endCursor = buffer.toString('base64');
        return ({
          id: post.id,
          title: post.title,
          content: post.content,
          author: post.author,
          cursor: endCursor,
        });
      })

      const hasNextPage = start + first < totalCount;

      const pageInfo = endCursor !== undefined ?
      {
        endCursor,
        hasNextPage,
      } :
      {
        hasNextPage,
      };

      const result = {
        postsPagination,
        pageInfo,
        totalCount,
      };

      return { success: true, message: 'Get Posts success', totalCount: result.totalCount, pageInfo: result.pageInfo, posts: result.postsPagination }
    }
  },
  Mutation: {
    signUp: (parent, args) => {
      console.log('args', args);

      if ( !args.name ) {
        throw new Error( 'username - Name is required' );
      }

      if ( !args.email ) {
        throw new Error( 'email - Email is required' );
      }

      if ( !args.password ) {
        throw new Error( 'Password is required' );
      }

      if (_.find(authors, {email: args.email})) {
        throw new Error('This email already exists')
      }

      const author = {
        ...args
      };


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
