// Constants
const COLLECTION_NAME = require('../constants/collection-name')

// Helpers
const {
  getDocument,
  addDocument,
  updateDocument
} = require('../helpers/firestore')
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  authenticated
} = require('../helpers/auth')

const { toggleItemInArray } = require('../helpers/handle-data')

const Mutation = {
  // User
  createUser: (_, { email, password, name }, {}) => {
    return createUserWithEmailAndPassword(email, password, name)
      .then(token => ({
        token
      }))
      .catch(error => error)
  },

  signInUser: (_, { email, password }, {}) => {
    return signInWithEmailAndPassword(email, password)
      .then(token => ({
        token
      }))
      .catch(error => error)
  },

  /**
   * Category
   * Note: This method is not for all user,
   * just admin/mod in system can create CookingType
   */
  createCategory: authenticated((_, data, {}) => {
    return {
      id: addDocument(COLLECTION_NAME.CATEGORY, data)
    }
  }),

  // List category user is following
  userToggleCategory: authenticated((_, { categoryId }, { currentUser }) => {
    const currentUserRef = `users/${currentUser.id}`

    return getDocument(currentUserRef)
      .then(user => {
        const newCategories = toggleItemInArray(user.follow_category, categoryId)

        return updateDocument(currentUserRef, {
          follow_category: newCategories
        })
        .then(() => ({
          results: newCategories
        }))
        .catch(error => error)
      })
      .catch(error => error)
  }),

  /**
   * CookingType
   * Note: This method is not for all user,
   * just admin/mod in system can create CookingType
   */
  createCookingType: authenticated((_, data, {}) => {
    return {
      id: addDocument(COLLECTION_NAME.COOKING_TYPE, data)
    }
  }),

  // Recipe
  createRecipe: authenticated((_, data, {}) => {
    return {
      id: addDocument(COLLECTION_NAME.RECIPE, data)
    }
  }),

  // List recipes user mark favorite
  userToggleRecipe: authenticated((_, { categoryId }, { currentUser }) => {
    const currentUserRef = `${COLLECTION_NAME.USER}/${currentUser.id}`

    return getDocument(currentUserRef)
      .then(user => {
        const newRecipes = toggleItemInArray(user.favoriteRecipe, categoryId)

        return updateDocument(currentUserRef, {
          favoriteRecipe: newRecipes
        })
        .then(() => ({
          results: newRecipes
        }))
        .catch(error => error)
      })
      .catch(error => error)
  }),

  // RecipeStep
  createRecipeStep: authenticated((_, data, { currentUser }) => {
    return {
      id: addDocument(COLLECTION_NAME.RECIPE_STEP, data)
    }
  }),

  // Comment
  createRecipeComment: authenticated((_, { recipeId, content }, { currentUser }) => {
    return {
      id: addDocument(COLLECTION_NAME.COMMENT, {
        recipeId,
        content,
        userId: currentUser.id,
        publishedDate: Date.now()
      })
    }
  }),
}

module.exports = Mutation