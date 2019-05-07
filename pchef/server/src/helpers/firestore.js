const { db } = require('../config/firebase')

// Format data return for FireStore Document and Collections
const mapDocumentToEntity = doc => ({ id: doc.id, ...doc.data() })
const mapCollectionToEntities = collection => (
  collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
)

// Query data from FireStore
const getDocument = path => (
  db.doc(path).get()
    .then(mapDocumentToEntity)
    .catch(error => error)
)

const getCollection = path => (
  db.collection(path).get()
    .then(mapCollectionToEntities)
    .catch(error => error)
)

const getCollectionWithCondition = (path, fieldName, operation, value) => (
  db.collection(path)
    .where(fieldName, operation, value).get()
    .then(mapCollectionToEntities)
    .catch(error => error)
)

// Add data
const addDocument = (path, data) => (
  db.collection(path).add(data)
    .then(docRef => docRef.id)
    .catch(error => error)
)

const addDocumentWithId = (path, id, data) => (
  db.collection(path).doc(id).set(data)
    .then(() => id)
    .catch(error => error)
  })
)

module.exports= {
  mapDocumentToEntity,
  mapCollectionToEntities,

  getDocument,
  getCollection,
  getCollectionWithCondition,

  addDocument,
  addDocumentWithId
}