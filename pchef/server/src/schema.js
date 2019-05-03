const { gql } = require('apollo-server')

const typeDefs = gql`
  type Category {
    id: String!
    title: String!
    img_url: String
  }

  type Recipe {
    id: String!
    category_id: String!
    cooking_type_id: String!
    title: String
    sub_title: String
    img_url: String
    description: String
    is_draft: Boolean
    modify_date: Int
    published_date: Int
    views: Int
    votes: [String]
  }

  type Query {
    category(id: String!): Category!
    allCategories: [Category]

    recipe(id: String!) : Recipe!
    allRecipes: [Recipe]
  }

  type Mutation {
    createCategory(
      title: String!
      img_url: String!
    ): Category!

    createRecipe(
      category_id: String!
      cooking_type_id: String!
      title: String
      sub_title: String
      img_url: String
      description: String
      is_draft: Boolean
      modify_date: Int
      published_date: Int
      views: Int
      votes: [String]
    ): Recipe!
  }
`

module.exports = typeDefs