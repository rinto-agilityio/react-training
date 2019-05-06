const firebase = require('firebase')

// Firebase config
firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
})

module.exports = {
  db: firebase.firestore(),
  auth: firebase.auth(),
}