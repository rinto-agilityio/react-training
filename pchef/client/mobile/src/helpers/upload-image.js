// Libs
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native'
import { storage } from '@configs/firebase'

type params = {
  uri: string,
  type: string,
}

/**
 * Upload image to firebase dtorage
 * @param  {object} { uri, type }
 */
export const uploadImage = ({ uri, type }: params): any => {
  window.Blob = RNFetchBlob.polyfill.Blob
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest

  return new Promise((resolve, reject) => {
    let tmpBlob = null
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const imageRef = storage.ref('recipes').child(`image_${(new Date()).getTime()}`)

    // create a blob from BASE64 encoded string
    RNFetchBlob.fs.readFile(uploadUri, 'base64')
      .then(response => RNFetchBlob.polyfill.Blob.build(response, { type: 'application/octet-stream;base64' }))
      .then(blob => {
        tmpBlob = blob
        return imageRef.put(blob, { contentType: type })
      })
      .then(() => {
        tmpBlob && tmpBlob.close()
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

/**
 * Select image to upload
 * @param {Function} callback
 */
export const selectImage = (callback: Function) => {
  const option = {
    title: 'Select a image',
    storageOptions: { skipBackup: true },
  }

  ImagePicker.showImagePicker(option, response => {
    if (!response.didCancel && !response.error && !response.customButton) {
      uploadImage(response).then(uri => callback(uri))
    }
  })
}
