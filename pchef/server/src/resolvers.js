const {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection
} = require('./helpers/firestore')

const resolvers = {
  Query: {
    category(_, { key }, {}) {
      return getDocument(`Category/${key}`)
    },

    allCategories() {
      return getCollection('Category')
    }
  }
}

module.exports = resolvers