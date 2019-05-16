const { map } = require('lodash')

// Constants
const COLLECTION_NAME = require('../constants/collection-name')

// Helpers
const { authenticated } = require('../helpers/auth')
const {
  getDocument,
  getCollection,
  getCollectionWithConditions,
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
}

module.exports = Query
