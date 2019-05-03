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
    category(_, { key }, {}) {
      return getDocument(`categories/${key}`)
    },

    allCategories() {
      return getCollection('categories')
    },

    // Recipe
    recipe(_, { key }, {}) {
      return getDocument(`recipes/${key}`)
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