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
  authenticated,
} = require('../helpers/auth')

const {
  findItemInArray,
  toggleItemInArray,
} = require('../helpers/handle-data')

// Mocking data
const { categories, cookingTypes } = require('../mocks')

const Mutation = {
  /**
   * Init data for app
   * This should be call one
   */
  initData: () => {
    console.log('init data for api')

    // Adding data for Category
    categories.forEach(category => {
      return addDocument(COLLECTION_NAME.CATEGORY, category)
        .then(() => console.log(`Added category: ${category.name}`))
    });

    // Adding data for Category
    cookingTypes.forEach(name => {
      return addDocument(COLLECTION_NAME.COOKING_TYPE, { name })
        .then(() => console.log(`Added cookingType: ${name}`))
    });

    return 'Done'
  },

  // User
  createUser: (_, { email, password, name }) => (
    createUserWithEmailAndPassword(email, password, name)
      .then(token => ({ token }))
      .catch(error => error)
  ),

  signInUser: (_, { email, password }) => (
    signInWithEmailAndPassword(email, password)
      .then(token => ({ token }))
      .catch(error => error)
  ),

  /**
   * Category
   * Note: This method is not for all user,
   * just admin/mod in system can create CookingType
   */
  createCategory: authenticated((_, data) => ({
    id: addDocument(COLLECTION_NAME.CATEGORY, data),
  })),

  // List category user is following
  userToggleCategory: authenticated((_, { categoryId }, { currentUser }) => {
    const currentUserRef = `users/${currentUser.id}`

    return getDocument(currentUserRef)
      .then(user => {
        const newCategories = toggleItemInArray(user.followCategory, categoryId)

        return updateDocument(currentUserRef, {
          followCategory: newCategories,
        }).then(() => ({
          results: newCategories,
        })).catch(error => error)
      })
      .catch(error => error)
  }),

  /**
   * CookingType
   * Note: This method is not for all user,
   * just admin/mod in system can create CookingType
   */
  createCookingType: authenticated((_, data) => ({
    id: addDocument(COLLECTION_NAME.COOKING_TYPE, data),
  })),

  // Recipe
  createRecipe: authenticated((_, data) => ({
    id: addDocument(COLLECTION_NAME.RECIPE, {
      ...data,
      views: 0,
      votes: [],
      modifyDate: Date.now().toString(),
      publishedDate: Date.now().toString(),
    }),
  })),

  publishRecipe: authenticated((_, { id }) => (
    updateDocument(`${COLLECTION_NAME.RECIPE}/${id}}`, {
      isDraft: false,
      publishedDate: Date.now().toString(),
      modifyDate: Date.now().toString(),
    }).then(() => ({ id }))
      .catch(error => error)
  )),

  // List recipes user mark favorite
  userToggleRecipe: authenticated((_, { recipeId }, { currentUser }) => {
    const currentUserRef = `${COLLECTION_NAME.USER}/${currentUser.id}`

    return getDocument(currentUserRef)
      .then(user => {
        const newRecipes = toggleItemInArray(user.favoriteRecipe, recipeId)

        return updateDocument(currentUserRef, {
          favoriteRecipe: newRecipes,
        })
          .then(() => ({
            results: newRecipes,
          }))
          .catch(error => error)
      })
      .catch(error => error)
  }),

  // RecipeStep
  createRecipeStep: authenticated((_, data, { currentUser }) => ({
    id: addDocument(COLLECTION_NAME.RECIPE_STEP, {
      ...data,
      userId: currentUser.id,
      publishedDate: Date.now().toString(),
      modifyDate: Date.now().toString(),
    }),
    step: data.step,
    title: data.title
  })),

  // Comment
  createRecipeComment: authenticated((_, data, { currentUser }) => ({
    id: addDocument(COLLECTION_NAME.COMMENT, {
      ...data,
      userId: currentUser.id,
      publishedDate: Date.now().toString(),
    }),
  })),

  /**
   * Check this useId exists in list or not
   * If wishlist available and userId exists in list, do nothing
   * If wishlist document is available, check userId to add if it not in list
   */
  createWishList: authenticated((
    _,
    { categoryId, cookingTypeId, date },
    { currentUser },
  ) => {
    const queryConditions = [
      {
        fieldName: 'categoryId',
        operator: '==',
        value: categoryId,
      },
      {
        fieldName: 'cookingTypeId',
        operator: '==',
        value: cookingTypeId,
      },
      {
        fieldName: 'date',
        operator: '==',
        value: date,
      },
    ]

    return getDocumentWithConditions(COLLECTION_NAME.WISH_LIST, queryConditions)
      .then(result => {
        if (result && result.id) {
          if (!findItemInArray(result.users, currentUser.id)) {
            return updateDocument(
              `${COLLECTION_NAME.WISH_LIST}/${result.id}`,
              { users: toggleItemInArray(result.users, currentUser.id) },
            )
              .then(() => ({ id: result.id }))
              .catch(error => error)
          }

          // If it exists, do nothing
          return {
            id: result.id,
          }
        }

        return {
          id: addDocument(COLLECTION_NAME.WISH_LIST, {
            categoryId,
            cookingTypeId,
            date,
            users: [currentUser.id],
          }),
        }
      })
      .catch(error => error)
  }),
}

module.exports = Mutation
