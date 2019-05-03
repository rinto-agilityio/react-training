const {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection
} = require('./helpers/firestore')

const resolvers = {
  Query: {
    category(_, { key }, {}) {
      return getDocument(`categories/${key}`)
    },

    allCategories() {
      return getCollection('categories')
    }
  }
}

module.exports = resolvers