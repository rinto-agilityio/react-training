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

// TODO: Should be replace by getCollectionWithConditions
const getCollectionWithCondition = (path, fieldName, operation, value) => (
  db.collection(path)
    .where(fieldName, operation, value).get()
    .then(mapCollectionToEntities)
    .catch(error => error)
)

/**
 * Get documents of collection with multiple conditions
 * @param {String} path
 * @param {Array} conditions
 * @return {Array} documents
 */
const getCollectionWithConditions = (path, conditions) => {
  let dbRef = db.collection(path)

  conditions.forEach(({ fieldName, operator, value}) => {
    dbRef = dbRef.where(fieldName, operator, value)
  });

  return dbRef.get()
    .then(mapCollectionToEntities)
    .catch(error => error)
}

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
)

// Update data
const updateDocument = (path, data) => (
  db.doc(path).update(data)
)

module.exports= {
  mapDocumentToEntity,
  mapCollectionToEntities,

  getDocument,
  getCollection,
  getCollectionWithCondition,
  getCollectionWithConditions,

  addDocument,
  addDocumentWithId,

  updateDocument
}