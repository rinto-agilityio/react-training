const { map } = require('lodash')
const {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection,
  getCollectionWithCondition,
  addDocument
} = require('./helpers/firestore')
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
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
    }
  }
}

module.exports = resolvers