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

/**
 * Get single document with multiple conditions
 * @param {String} path
 * @param {Array} conditions
 * @return {Object} document
 */
const getDocumentWithConditions = (path, conditions) => {
  let dbRef = db.collection(path)

  conditions.forEach(({ fieldName, operator, value }) => {
    dbRef = dbRef.where(fieldName, operator, value)
  });

  return dbRef.get()
    .then(mapCollectionToEntities)
    .then(results => (results.length ? results[0] : null))
    .catch(error => error)
}

/**
 * Get documents of collection with multiple conditions
 * @param {String} path
 * @param {Array} conditions
 * @return {Array} documents
 */
const getCollectionWithConditions = (path, conditions) => {
  let dbRef = db.collection(path)

  conditions.forEach(({ fieldName, operator, value }) => {
    dbRef = dbRef.where(fieldName, operator, value)
  });

  return dbRef.get()
    .then(mapCollectionToEntities)
    .catch(error => error)
}

/**
 * Get documents of collection with multiple ids
 * @param {String} path
 * @param {Array} listId
 */
const getDocumentWithListId = (path, ids) => {
  return Promise.all(ids.map(id => getDocument(`${path}/${id}`)))
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

const updateDocumentNotExist = (path, data) => (
  db.doc(path).set(data)
)

module.exports = {
  mapDocumentToEntity,
  mapCollectionToEntities,

  getDocument,
  getCollection,
  getDocumentWithConditions,
  getCollectionWithConditions,
  getDocumentWithListId,

  addDocument,
  addDocumentWithId,

  updateDocument,
  updateDocumentNotExist,
}
