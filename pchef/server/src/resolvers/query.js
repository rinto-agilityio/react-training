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
  getCategory: authenticated((_, { id }, {}) => {
    const queryConditions = [
      {
        fieldName: 'categoryId',
        operator: '==',
        value: id
      }
    ]

    return getDocument(`${COLLECTION_NAME.CATEGORY}/${id}`)
      .then(category => {
        return getCollectionWithConditions(
          COLLECTION_NAME.RECIPE,
          queryConditions
        )
        .then(recipes => {
          category.recipes = recipes

          return category
        })
      })
  }),

  getAllCategories: authenticated((_, args, {}) => {
    return getCollection('categories')
      .then(categories => {
        return map(categories, category => {
          const queryConditions = [
            {
              fieldName: 'categoryId',
              operator: '==',
              value: category.id
            }
          ]

          return getCollectionWithConditions(
            COLLECTION_NAME.RECIPE,
            queryConditions,
          )
          .then(recipes => {
            category.recipes = recipes

            return category
          })
        })
      })
  }),

  // Recipe
  getRecipe: authenticated((_, { id }, {}) => {
    return getDocument(`${COLLECTION_NAME.RECIPE}/${id}`)
  }),

  getAllRecipes: authenticated((_, args, context) => {
    return getCollection(COLLECTION_NAME.RECIPE)
  }),

  // RecipeStep
  getRecipeStep: authenticated((_, { id }, {}) => {
    return getDocument(`${COLLECTION_NAME.RECIPE_STEP}/${id}`)
  }),

  getAllRecipeSteps: authenticated((_, { id }, {}) => {
    const queryConditions = [
      {
        fieldName: 'recipeId',
        operator: '==',
        value: id
      }
    ]

    return getCollectionWithConditions(
        COLLECTION_NAME.RECIPE_STEP,
        queryConditions
      )
      .then(steps => steps)
      .catch(error => error)
  }),

  getRecipeComments: authenticated((_, { id }, {}) => {
    const queryConditions = [
      {
        fieldName: 'recipeId',
        operator: '==',
        value: id
      }
    ]

    return getCollectionWithConditions(
      COLLECTION_NAME.COMMENT,
      queryConditions
    )
    .then(comments => comments)
    .catch(error => error)
  }),
}

module.exports = Query