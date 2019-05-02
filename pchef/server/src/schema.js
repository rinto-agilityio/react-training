const { gql } = require('apollo-server')

const typeDefs = gql`
  type Category {
    id: String!
    title: String!
    img_url: String!
  }

  type Query {
    category(key: String!): Category
    allCategories: [Category]!
  }
`

module.exports = typeDefs