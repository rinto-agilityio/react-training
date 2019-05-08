const { auth, admin } = require('../config/firebase')
const { addDocumentWithId } = require('./firestore')

// Constants
const COLLECTION_NAME = require('../constants/collection-name')

/**
 * Use Firebase Admin Auth for authentication
 * Create document in `users` collection to saving user information
 * @param {String} email
 * @param {String} password
 * @param {String} name
 * @return {String} token
 * TODO: Filter email domain: firebase.auth.GoogleAuthProvider
 */
const createUserWithEmailAndPassword = (email, password, name) => (
  auth.createUserWithEmailAndPassword(email, password)
    .then(data => (
      addDocumentWithId(
        COLLECTION_NAME.USER,
        data.user.uid,
        {
          email,
          name,
          favoriteRecipe: [],
          followCategory: [],
        },
      ).then(() => (
        data.user.getIdToken()
          .then(token => token)
          .catch(error => error)
      )).catch(error => error)
    ))
    .catch(error => error)
)

const signInWithEmailAndPassword = (email, password) => (
  auth.signInWithEmailAndPassword(email, password)
    .then(data => (
      data.user.getIdToken()
        .then(token => token)
        .catch(error => error)
    ))
    .catch(error => error)
)

const getUserInfoByToken = token => (
  admin
    .auth()
    .verifyIdToken(token)
    .then(({ uid, email }) => ({
      id: uid,
      email,
    }))
    .catch(error => {
      console.warn(error)
      return null
    })
)

const authenticated = next => (root, args, context, info) => {
  if (!context.currentUser) {
    throw new Error('Unauthenticated!')
  }

  return next(root, args, context, info)
}

module.exports = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getUserInfoByToken,
  authenticated,
}
