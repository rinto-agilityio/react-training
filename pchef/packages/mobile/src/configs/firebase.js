import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';
import * as constants from '@constants/api';

// Initialize Firebase
const config = {
  apiKey: constants.KEY,
  authDomain: constants.DOMAIN,
  databaseURL: constants.URL,
  projectId: constants.ID,
  storageBucket: constants.BUCKET,
  messagingSenderId: constants.SENDER_ID,
};
export default firebase.initializeApp(config);
