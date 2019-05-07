const { auth, admin } = require('../config/firebase')
const { addDocument, addDocumentWithId } = require('./firestore')

// TODO: Filter email domain:
// https://firebase.google.com/docs/reference/node/firebase.auth.GoogleAuthProvider

const createUserWithEmailAndPassword = (email, password, name) => (
  auth.createUserWithEmailAndPassword(email, password)
    .then(data => {
      return addDocumentWithId('users', data.user.uid, { email, name })
        .then(() => {
          return data.user.getIdToken()
            .then(token => token)
            .catch(error => error)
        })
        .catch(error => error)
    })
    .catch(error => error)
)

const signInWithEmailAndPassword = (email, password) => (
  auth.signInWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.getIdToken()
        .then(token => {
          console.log('token of user: ', token)
          return token
        })
        .catch(error => error)
    })
    .catch(error => error)
)

const getUserInfoByToken = token => {
  return admin.auth().verifyIdToken(token)
    .then(({ uid, email }) => ({
        uid,
        email
      })
    )
    .catch(error => error)
}

module.exports= {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getUserInfoByToken
}
