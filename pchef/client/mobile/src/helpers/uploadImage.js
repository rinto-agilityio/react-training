// Libs
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native'

const { storage } = require('@configs/firebase')

/**
 * uploadImage
 * @param  {object} dataImage
 */

type params = {
  uri: string,
  type: string,
}
export const uploadImage = ({ uri, type }: params): any => {
  const { Blob } = RNFetchBlob.polyfill
  window.Blob = Blob
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest

  return new Promise((resolve, reject) => {
    let tmpBlob = null
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const imageRef = storage.ref('recipes').child(`image_${(new Date()).getTime()}`)

    // create a blob from BASE64 encoded string
    RNFetchBlob.fs.readFile(uploadUri, 'base64')
      .then(response => Blob.build(response, { type: 'application/octet-stream;base64' }))
      .then(blob => {
        tmpBlob = blob
        imageRef.put(blob, { contentType: type })
        return tmpBlob
      })
      .then(tmpBlob => {
        tmpBlob.close()
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
