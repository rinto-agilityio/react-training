const db = require('../config/database')

// Format data return for FireStore Document and Collections
const mapDocumentToEntity = doc => ({ id: doc.id, ...doc.data() })
const mapCollectionToEntities = collection => (
  collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
)

// Query data from FireStore
const getDocument = path => db.doc(path).get().then(mapDocumentToEntity)
const getCollection = path => db.collection(path).get().then(mapCollectionToEntities)

// Add data
const addDocument = (path, data) => {
  return db.collection(path).add(data).then(docRef => docRef.id)
}

module.exports= {
  mapDocumentToEntity,
  mapCollectionToEntities,

  getDocument,
  getCollection,

  addDocument
}