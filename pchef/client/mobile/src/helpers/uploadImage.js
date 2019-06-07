// Libs
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native'

/**
 * uploadImage
 * @param  {object} dataImage
 */
export const uploadImage = (uri: string) => (
  new Promise<void>((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    // create a blob from BASE64 encoded string
    RNFetchBlob.fs.readFile(uploadUri, 'base64')
      .then(data => RNFetchBlob.polyfill.Blob.build(data, { type: 'application/octet-stream;BASE64' }))
      .then(blob => {
        resolve(blob)
      })
      .catch(error => {
        reject(error)
      })
  })
)

export const selectImage = (callback: Function) => {
  const option = {
    title: 'Select a image',
    storageOptions: { skipBackup: true },
  }

  ImagePicker.showImagePicker(option, response => {
    if (!response.didCancel && !response.error && !response.customButton) {
      uploadImage(response.uri)
        .then(response => {
          callback(response)
        })
    }
  })
}
