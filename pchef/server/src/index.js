// Load env variables
require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({ url }) => console.log(`Server is running on: ${url}`))