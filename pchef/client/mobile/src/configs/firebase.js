import * as constants from '@constants/api'

const firebase = require('firebase')
require('firebase/storage')

// Firebase config
firebase.initializeApp({
  apiKey: constants.API_KEY,
  authDomain: constants.AUTH_DOMAIN,
  databaseURL: constants.DATABASE_URL,
  projectId: constants.PROJECT_ID,
  storageBucket: constants.STORAGE_BUCKET,
})

module.exports = {
  auth: firebase.auth(),
  storage: firebase.storage(),
}
