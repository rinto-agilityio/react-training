import * as firebase from 'firebase'
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native'

const Blob = RNFetchBlob.polyfill.Blob,
  fs = RNFetchBlob.fs

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

const fbApp = firebase.initializeApp(fbConfig),
  storageRef = firebase.storage().ref()

export const uploadImage = imageFile => {
  const fileUri = imageFile.uri,
    fileBase64 = imageFile.data,
    fileName = Date.now() + imageFile.fileName,
    fileNameArr = fileName.split('.'),
    fileType = fileNameArr[fileNameArr.length - 1]

  return new Promise((resolve, reject) => {
    let uploadBlob = null
    const imageRef = storageRef.child('images').child(fileName),
      uploadUri =
        Platform.OS === 'ios' ? fileUri.replace('file://', '') : fileUri

    Blob.build(fileBase64, { type: 'application/octet-stream;BASE64' })
      .then(blob => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: `image/${fileType}` })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then(url => {
        resolve(url)
      })
      .catch(error => {
        reject(error)
      })
  })
}
