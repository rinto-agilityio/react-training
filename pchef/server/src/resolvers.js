const {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection,
  addDocument
} = require('./helpers/firestore')

const resolvers = {
  Query: {
    category(_, { key }, {}) {
      return getDocument(`categories/${key}`)
    },

    allCategories() {
      return getCollection('categories')
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