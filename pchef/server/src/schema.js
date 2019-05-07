const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: String!
    email: String!
    name: String!
    avatar: String
    favorite_recipe: [String]
    follow_category: [String]
  }

  type Category {
    id: String!
    title: String!
    img_url: String
    recipes: [Recipe]
  }

  type CookingType {
    id: String!
    name: String!
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

  type RecipeStep {
    id: String!
    recipe_id: String!
    title: String!
    step: Int!
    img_url: String
    description: String
    published_date: Int
    modify_date: Int
  }

  type Comment {
    id: String!
    recipe_id: String!
    user_id: String!
    content: String!
    published_date: Int
  }

  type PayloadAuth {
    token: String
  }

  type PayloadResults {
    results: [String]
  }

  type Query {
    getCategory(id: String!): Category!
    getAllCategories: [Category]

    getRecipe(id: String!): Recipe!
    getAllRecipes: [Recipe]

    getRecipeStep(id: String!): RecipeStep!
    getAllRecipeSteps(id: String!): [RecipeStep]
  }

  type Mutation {
    createCategory(
      title: String!
      img_url: String!
    ): Category!

    createCookingType(
      name: String!
    ): CookingType

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
    ): PayloadAuth!

    signInUser(
      email: String!
      password: String!
    ): PayloadAuth!

    userToggleCategory(
      categoryId: String!
    ): PayloadResults!

    userToggleRecipe(
      recipeId: String!
    ): PayloadResults!

    createRecipeStep(
      recipe_id: String!
      title: String!
      step: Int!
      img_url: String
      description: String
      published_date: Int
      modify_date: Int
    ): RecipeStep!

    createRecipeComment(
      recipeId: String!
      content: String!
    ): Comment
  }
`

module.exports = typeDefs