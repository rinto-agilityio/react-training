
const { UserInputError, PubSub } = require('apollo-server');
const _ = require('lodash');
const Types = require('./Types');
const {
  getData,
  setData
} = require('./helpers/index');

const pubsub = new PubSub();
const authors = getData('./data/Authors.json');
const posts = getData('./data/Posts.json');

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve users from the "users" array above.
module.exports = {
  Query: {
    getAuthors: () => {
      return { success: true, message: "Get authors List Success", authors: authors };
    },
    signIn: (parent, args) => {
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

      const postWithAuthor = posts.filter(post => post.author && post.author.id === args.authorId)

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

      const { name, email, password } = args

      const validationErrors = {};
      if (!name) {
        validationErrors.name = ('Name is required')
      }

      if (!email) {
        validationErrors.email = ('Email is required')
      }

      if (!password) {
        validationErrors.password = ('Password is required')
      }

      if (email && _.find(authors, {email: email})) {
        validationErrors.email = ('This email already exists')
      }

      if (password && password.length < 6) {
        validationErrors.password = ('Use 6 or more characters')
      }

      if (Object.keys(validationErrors).length > 0) {
        throw new UserInputError(
          'Failed to get events due to validation errors',
          { validationErrors }
        );
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

      pubsub.publish(Types.POST_ADDED, {postAdded: newPost});

      return  newPost
    },

    editPost: (_, { post}) => {

      const author = authors.find(author => author.id === post.authorId)

      const newEditPost = {...post, author: author}

      let newPosts = posts.map(postItem => postItem.id === post.id ? post : newEditPost)

      setData('./data/Posts.json', newPosts)

      pubsub.publish(Types.POST_EDIT, {postEdit: newEditPost});

      return newEditPost
    },

    deletePost: (_, { id}) => {
      console.log('post', id)
      const post = post.find(post => post.id === id)
      let newPosts = posts.filter(postItem => postItem.id !== id)

      setData('./data/Posts.json', newPosts)

      // pubsub.publish(Types.POST_EDIT, {postEdit: post});

      return {
        message: 'delete success',
        success: true,
        post: post
      }
    }
  },

  Subscription: {
    postAdded: {
      subscribe: () => pubsub.asyncIterator(Types.POST_ADDED)
    },
    postEdit: {
      subscribe: () => pubsub.asyncIterator(Types.POST_EDIT)
    }
  }
};

