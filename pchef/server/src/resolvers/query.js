const { map } = require('lodash')

// Constants
const COLLECTION_NAME = require('../constants/collection-name')

// Helpers
const {
  getDocument,
  getCollection,
  getCollectionWithCondition,
} = require('../helpers/firestore')

const { authenticated } = require('../helpers/auth')

const Query = {
  // Category
  category: (_, { id }, {}) => {
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
  },

  allCategories: () => {
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
  },

  // Recipe
  recipe: (_, { id }, {}) => {
    return getDocument(`${COLLECTION_NAME.RECIPE}/${id}`)
  },

  allRecipes: (_, args, context) => {
    return getCollection(COLLECTION_NAME.RECIPE)
  },

  recipeSteps: authenticated((_, { id }, {}) => {
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