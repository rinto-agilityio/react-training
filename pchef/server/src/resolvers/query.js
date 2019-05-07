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
          'category_id', '==', id
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
            'recipes',
            'category_id', '==', category.id
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
        'recipe_id', '==', id
      )
      .then(steps => {
        // category.recipes = recipes
        console.log('steps.length: ', steps.length)

        return steps
      })
      .catch(error => error)
  })
}

module.exports = Query