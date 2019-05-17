// Load env variables
require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { getUserInfoByToken } = require('./helpers/auth')

// Constants
const HEADER_TOKEN_NAME = 'authorization'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null
    let currentUser = null

    try {
      authToken = req.headers[HEADER_TOKEN_NAME]
      console.log('Server side authToken')
      console.log(authToken)

      if (authToken) {
        currentUser = await getUserInfoByToken(authToken)
      }
    } catch (error) {
      console.warn(`Unable to authenticate using auth token: ${authToken}`);
    }

    return {
      authToken,
      currentUser
    }
  }
})

server
  .listen()
  .then(({ url }) => console.log(`Server is running on: ${url}`))
