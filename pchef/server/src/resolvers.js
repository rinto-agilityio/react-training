const { map } = require('lodash')
const {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection,
  getCollectionWithCondition,
  addDocument
} = require('./helpers/firestore')
const { createUserWithEmailAndPassword } = require('./helpers/auth')

const resolvers = {
  Query: {
    // Category
    category(_, { id }, {}) {
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

    allCategories() {
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
    recipe(_, { id }, {}) {
      return getDocument(`recipes/${id}`)
    },

    allRecipes() {
      return getCollection('recipes')
    }
  },

  Mutation: {
    createCategory (_, data, {}) {
      return {
        id: addDocument('categories', data)
      }
    },

    createRecipe (_, data, {}) {
      return {
        id: addDocument('recipes', data)
      }
    },

    createUser (_, { email, password, name }, {}) {
      return createUserWithEmailAndPassword(email, password, name)
        .then(token => ({
          email,
          token
        }))
        .catch(error =>{
          console.log('resolver error: ', error.message)
        })
    }
  }
}

module.exports = resolvers