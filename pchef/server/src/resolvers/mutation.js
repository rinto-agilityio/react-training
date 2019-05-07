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
  createCategory: (_, data, {}) => {
    return {
      id: addDocument(COLLECTION_NAME.CATEGORY, data)
    }
  },

  // This method is not for all user, just admin/mod in system can create CookingType
  createCookingType: (_, data, {}) => {
    return {
      id: addDocument(COLLECTION_NAME.COOKING_TYPE, data)
    }
  },

  createRecipe: (_, data, {}) => {
    return {
      id: addDocument(COLLECTION_NAME.RECIPE, data)
    }
  },

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

  // userToggleCategory
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

  userToggleRecipe: authenticated((_, { categoryId }, { currentUser }) => {
    const currentUserRef = `${COLLECTION_NAME.USER}/${currentUser.id}`

    return getDocument(currentUserRef)
      .then(user => {
        const newRecipes = toggleItemInArray(user.favorite_recipe, categoryId)

        return updateDocument(currentUserRef, {
          favorite_recipe: newRecipes
        })
        .then(() => ({
          results: newRecipes
        }))
        .catch(error => error)
      })
      .catch(error => error)
  }),

  createRecipeStep: authenticated((_, data, { currentUser }) => {
    return {
      id: addDocument(COLLECTION_NAME.RECIPE_STEP, data)
    }
  })
}

module.exports = Mutation