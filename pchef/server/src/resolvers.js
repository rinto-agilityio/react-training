const {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection,
  addDocument
} = require('./helpers/firestore')

const resolvers = {
  Query: {
    // Category
    category(_, { id }, {}) {
      return getDocument(`categories/${id}`)
    },

    allCategories() {
      return getCollection('categories')
    },

    // Recipe
    recipe(_, { id }, {}) {
      return getDocument(`recipes/${id}`)
    }
  },

  Mutation: {
    createCategory (_, data, {}) {
      return {
        id: addDocument('categories', data)
      }
    }
  }
}

module.exports = resolvers