const firebase = require('firebase')
require('firebase/storage')
const admin = require('firebase-admin')

const serviceAccount = require('../../serviceAccountKey.json');

// Firebase config
firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
})

module.exports = {
  db: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
  admin,
}
