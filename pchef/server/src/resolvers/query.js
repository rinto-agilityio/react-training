const { map } = require('lodash')

// Constants
const COLLECTION_NAME = require('../constants/collection-name')

// Helpers
const { recipes } = require('../mocks')
const { authenticated } = require('../helpers/auth')
const {
  getDocument,
  getCollection,
  getCollectionWithConditions,
  getDocumentWithListId
} = require('../helpers/firestore')

const Query = {
  // Category
  getCategory: authenticated((_, { id }, context) => {
    const queryConditions = [
      {
        fieldName: 'categoryId',
        operator: '==',
        value: id,
      },
    ]

    return getDocument(`${COLLECTION_NAME.CATEGORY}/${id}`)
      .then(category => (
        getCollectionWithConditions(
          COLLECTION_NAME.RECIPE,
          queryConditions,
        )
          .then(recipes => ({
            ...category,
            recipes,
          }))
      ))
  }),

  getAllCategories: authenticated((_, args, context) => (
    getCollection(COLLECTION_NAME.CATEGORY)
      .then(categories => (
        map(categories, category => {
          const queryConditions = [
            {
              fieldName: 'categoryId',
              operator: '==',
              value: category.id,
            },
          ]

          return getCollectionWithConditions(
            COLLECTION_NAME.RECIPE,
            queryConditions,
          )
            .then(recipes => ({
              ...category,
              recipes,
            }))
        })
      ))
  )),

  // CokingType
  getAllCookingTypes: authenticated((_, args, context) => (
    getCollection(COLLECTION_NAME.COOKING_TYPE)
  )),

  // Recipe
  getRecipe: authenticated((_, { id }, context) => (
    getDocument(`${COLLECTION_NAME.RECIPE}/${id}`)

  )),

  getRecipes: authenticated((_, args, { currentUser }) => {
    const userId = currentUser.id

    const queryConditions = [
      {
        fieldName: 'userId',
        operator: '==',
        value: userId,
      },
    ]

    return getCollectionWithConditions(
      COLLECTION_NAME.RECIPE,
      queryConditions,
    )
      .then(recipes => recipes)
      .catch(error => error)
  }),

  getAllRecipes: authenticated((_, args, context) => (
    getCollection(COLLECTION_NAME.RECIPE)
  )),

  // RecipeStep
  getRecipeStep: authenticated((_, { id }, context) => (
    getDocument(`${COLLECTION_NAME.RECIPE_STEP}/${id}`)
  )),

  getAllRecipeSteps: authenticated((_, { id }, context) => {
    const queryConditions = [
      {
        fieldName: 'recipeId',
        operator: '==',
        value: id,
      },
    ]

    return getCollectionWithConditions(
      COLLECTION_NAME.RECIPE_STEP,
      queryConditions,
    )
      .then(steps => steps)
      .catch(error => error)
  }),

  getRecipeComments: authenticated((_, { id }, context) => {
    const queryConditions = [
      {
        fieldName: 'recipeId',
        operator: '==',
        value: id,
      },
    ]

    return getCollectionWithConditions(
      COLLECTION_NAME.COMMENT,
      queryConditions,
    )
      .then(comments => comments)
      .catch(error => error)
  }),

  // User
  getUser: authenticated(async (_, args, context) => {
    const userId = await context.currentUser.id

    // Get full information of current user
    const userInfo = await getDocument(`${COLLECTION_NAME.USER}/${userId}`)

    const { followCategory, favoriteRecipe } = userInfo

    // Get categories by list category ids
    const categories = await getDocumentWithListId(
      COLLECTION_NAME.CATEGORY,
      followCategory,
    ).then(categories => categories)

    // Get recipes by list recipes ids
    const recipes = await getDocumentWithListId(
      COLLECTION_NAME.RECIPE,
      favoriteRecipe,
    ).then(recipes => recipes)

    return {
      user: userInfo,
      followCategory: categories,
      favoriteRecipe: recipes,
    }
  }),

  // WishList
  getAllWishList: authenticated((_, args, context) => (
    getCollection(COLLECTION_NAME.WISH_LIST)
  )),
}

module.exports = Query
