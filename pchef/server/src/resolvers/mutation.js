// Constants
const COLLECTION_NAME = require('../constants/collection-name')

// Helpers
const {
  getDocument,
  addDocument,
  updateDocument,
  getDocumentWithConditions,
} = require('../helpers/firestore')
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  authenticated
} = require('../helpers/auth')

const {
  findItemInArray,
  toggleItemInArray,
} = require('../helpers/handle-data')

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
      id: addDocument(COLLECTION_NAME.RECIPE, {
        ...data,
        views: 0,
        votes: [],
        modifyDate: Date.now(),
        publishedDate: Date.now()
      })
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
      id: addDocument(COLLECTION_NAME.RECIPE_STEP, {
        ...data,
        publishedDate: Date.now(),
        modifyDate: Date.now()
      })
    }
  }),

  // Comment
  createRecipeComment: authenticated((_, data, { currentUser }) => {
    return {
      id: addDocument(COLLECTION_NAME.COMMENT, {
        ...data,
        userId: currentUser.id,
        publishedDate: Date.now()
      })
    }
  }),

  /**
   * Check this useId exists in list or not
   * If wishlist available and userId exists in list, do nothing
   * If wishlist document is available, check userId to add if it not in list
   */
  createWishList: authenticated((
    _,
    { categoryId, cookingTypeId, date },
    { currentUser }
  ) => {
    const queryConditions = [
      {
        fieldName: 'categoryId',
        operator: '==',
        value: categoryId
      },
      {
        fieldName: 'cookingTypeId',
        operator: '==',
        value: cookingTypeId
      },
      {
        fieldName: 'date',
        operator: '==',
        value: date
      },
    ]

    return getDocumentWithConditions(COLLECTION_NAME.WISH_LIST, queryConditions)
    .then(result => {
      if (result && result.id) {
        if (!findItemInArray(result.users, currentUser.id)) {
          return updateDocument(
            `${COLLECTION_NAME.WISH_LIST}/${result.id}`,
            { users: toggleItemInArray(result.users, currentUser.id) }
          )
          .then(() => ({ id: result.id }))
          .catch(error => error)
        }

        // If it exists, do nothing
        return {
          id: result.id
        }
      } else {
        return {
          id: addDocument(COLLECTION_NAME.WISH_LIST, {
            categoryId,
            cookingTypeId,
            date,
            users: [currentUser.id]
          })
        }
      }
    })
    .catch(error => error)
  }),
}

module.exports = Mutation