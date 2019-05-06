const { auth } = require('../config/firebase')
const { addDocument } = require('./firestore')

// TODO: Filter email domain:
// https://firebase.google.com/docs/reference/node/firebase.auth.GoogleAuthProvider

const createUserWithEmailAndPassword = (email, password, name) => (
  auth.createUserWithEmailAndPassword(email, password)
    .then(data => {
      return addDocument('users', { email, name })
        .then(uid => data.user.refreshToken)
    })
    .catch(error => error)
)

const signInWithEmailAndPassword = (email, password) => (
  auth.signInWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.refreshToken
    })
    .catch(error => error)
)

module.exports= {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
}