const db = require('../config/database')

// Format data return for FireStore Document
const mapDocumentToEntity = doc => ({ id: doc.id, ...doc.data() })

// Format data return for FireStore Collection
const mapCollectionToEntities = collection => (
  collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
)

// Query data from FireStore
const getDocument = path => db.doc(path).get().then(mapDocumentToEntity)
const getCollection = path => db.collection(path).get().then(mapCollectionToEntities)

module.exports= {
  mapDocumentToEntity,
  mapCollectionToEntities,
  getDocument,
  getCollection
}