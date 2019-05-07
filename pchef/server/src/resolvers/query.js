const { map } = require('lodash')

// Constants
const COLLECTION_NAME = require('../constants/collection-name')

// Helpers
const { authenticated } = require('../helpers/auth')
const {
  getDocument,
  getCollection,
  getCollectionWithCondition,
} = require('../helpers/firestore')

const Query = {
  // Category
  getCategory: authenticated((_, { id }, {}) => {
    return getDocument(`${COLLECTION_NAME.CATEGORY}/${id}`)
      .then(category => {
        return getCollectionWithCondition(
          COLLECTION_NAME.RECIPE,
          'categoryId', '==', id
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
          return getCollectionWithCondition(
            COLLECTION_NAME.RECIPE,
            'categoryId', '==', category.id
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
    return getCollectionWithCondition(
        COLLECTION_NAME.RECIPE_STEP,
        'recipeId', '==', id
      )
      .then(steps => steps)
      .catch(error => error)
  }),

  getRecipeComments: authenticated((_, { id }, {}) => {
    return getCollectionWithCondition(
      COLLECTION_NAME.COMMENT,
      'recipeId', '==', id
    )
    .then(comments => comments)
    .catch(error => error)
  }),
}

module.exports = Query