const { map, find, filter, concat } = require('lodash')
const {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection,
  getCollectionWithCondition,
  addDocument,
  updateDocument
} = require('./helpers/firestore')
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  authenticated
} = require('./helpers/auth')

const resolvers = {
  Query: {
    // Category
    category: (_, { id }, {}) => {
      return getDocument(`categories/${id}`)
        .then(category => {
          return getCollectionWithCondition(
            'recipes',
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
      return getDocument(`recipes/${id}`)
    },

    allRecipes: (_, args, context) => {
      return getCollection('recipes')
    }
  },

  Mutation: {
    createCategory: (_, data, {}) => {
      return {
        id: addDocument('categories', data)
      }
    },

    createRecipe: (_, data, {}) => {
      return {
        id: addDocument('recipes', data)
      }
    },

    createUser: (_, { email, password, name }, {}) => {
      return createUserWithEmailAndPassword(email, password, name)
        .then(token => ({
          token
        }))
        .catch(error =>{
          console.log('resolver error: ', error.message)
        })
    },

    signInUser: (_, { email, password }, {}) => {
      return signInWithEmailAndPassword(email, password)
        .then(token => ({
          token
        }))
        .catch(error =>{
          console.log('resolver error: ', error.message)
        })
    },

    // userToggleCategory
    userToggleCategory: authenticated((_, { categoryId }, { currentUser }) => {
      const currentUserRef = `users/${currentUser.id}`

      return getDocument(currentUserRef)
        .then(user => {
          const followedCategories = user.follow_category
          let followedCategoriesUpdated

          if (find(followedCategories, item => item === categoryId)) {
            followedCategoriesUpdated = filter(followedCategories, item => (
              item !== categoryId
            ))
          } else {
            if (followedCategories.length) {
              followedCategoriesUpdated = concat(followedCategories, [categoryId])
            } else {
              followedCategoriesUpdated = [categoryId]
            }
          }

          return updateDocument(currentUserRef, {
            follow_category: followedCategoriesUpdated
          })
          .then(() => ({
            results: followedCategoriesUpdated
          }))
          .catch(error => error)
        })
        .catch(error => error)
    })
  }
}

module.exports = resolvers