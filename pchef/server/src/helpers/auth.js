const { auth } = require('../config/firebase')
const { addDocument } = require('./firestore')

const createUserWithEmailAndPassword = (email, password, name) => (
  auth.createUserWithEmailAndPassword(email, password)
    .then(data => {
      return addDocument('users', { email, name })
        .then(uid => data.user.refreshToken)
    })
    .catch(error => {
      console.log('err message: ', error.message)
      return error
    })
)

module.exports= {
  createUserWithEmailAndPassword
}