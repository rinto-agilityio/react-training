const { gql } = require('apollo-server')

const typeDefs = gql`
  type Category {
    id: String!
    title: String!
    img_url: String
    recipes: [Recipe]
  }

  type Recipe {
    id: String!
    category_id: String!
    cooking_type_id: String!
    title: String!
    sub_title: String
    img_url: String
    description: String
    is_draft: Boolean!
    modify_date: Int
    published_date: Int
    views: Int
    votes: [String]
  }

  type User {
    id: String!
    email: String!
    name: String!
    avatar: String
    favorite_recipe: [String]
    follow_category: [String]
  }

  type AuthPayload {
    token: String
  }

  type ResultsPayload {
    results: [String]
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
      title: String!
      sub_title: String
      img_url: String
      description: String
      is_draft: Boolean! = true
      modify_date: Int
      published_date: Int
      views: Int
      votes: [String]
    ): Recipe!

    createUser(
      email: String!
      password: String!
      name: String!
    ): AuthPayload!

    signInUser(
      email: String!
      password: String!
    ): AuthPayload!

    userToggleCategory(
      categoryId: String!
    ): ResultsPayload!

    userToggleRecipe(
      recipeId: String!
    ): ResultsPayload!
  }
`

module.exports = typeDefs