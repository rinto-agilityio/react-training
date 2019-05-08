const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: String!
    email: String!
    name: String!
    avatar: String
    favoriteRecipe: [String]
    followCategory: [String]
  }

  type Category {
    id: String!
    title: String!
    imgUrl: String
    recipes: [Recipe]
  }

  type CookingType {
    id: String!
    name: String!
  }

  type Recipe {
    id: String!
    categoryId: String!
    cookingTypeId: String!
    userId: String!
    title: String!
    isDraft: Boolean!
    subTitle: String
    imgUrl: String
    description: String
    views: Int
    votes: [String]
    modifyDate: String!
    publishedDate: String!
  }

  type RecipeStep {
    id: String!
    recipeId: String!
    title: String!
    step: Int!
    imgUrl: String
    description: String
    publishedDate: String!
    modifyDate: String!
  }

  type Comment {
    id: String!
    recipeId: String!
    userId: String!
    content: String!
    publishedDate: String!
  }

  type WishList {
    id: String!
    categoryId: String!
    cookingTypeId: String!
    date: String!
    users: [String]
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

    getRecipeComments(id: String!): [Comment]
  }

  type Mutation {
    createCategory(
      title: String!
      imgUrl: String!
    ): Category!

    createCookingType(
      name: String!
    ): CookingType

    createRecipe(
      categoryId: String!
      cookingTypeId: String!
      title: String!
      subTitle: String
      imgUrl: String
      description: String
      isDraft: Boolean! = true
    ): Recipe!

    publishRecipe(
      id: String!
    ): Recipe

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
      recipeId: String!
      title: String!
      step: Int!
      imgUrl: String
      description: String
    ): RecipeStep!

    createRecipeComment(
      recipeId: String!
      content: String!
    ): Comment

    createWishList(
      categoryId: String!
      cookingTypeId: String!
      date: String!
    ): WishList
  }
`

module.exports = typeDefs
