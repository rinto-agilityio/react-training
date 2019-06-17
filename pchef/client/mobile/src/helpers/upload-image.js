// Libs
import ImagePicker from 'react-native-image-picker'
import { storage } from '@configs/firebase'

type params = {
  uri: string,
  type: string,
}

/**
 * Upload image to firebase dtorage
 * @param  {object} { uri, type }
 */
export const uploadImage = async ({ uri }: params): any => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = () => resolve(xhr.response)
    xhr.onerror = () => reject(new TypeError('Network request failed'))
    xhr.responseType = 'blob'
    xhr.open('GET', uri, true)
    xhr.send(null)
  })

  const imageRef = storage.ref('recipes').child(`image_${(new Date()).getTime()}`)
  const snapshot = await imageRef.put(blob)
  const url = await snapshot.ref.getDownloadURL()

  // Close and release the blob
  blob.close()

  // return the URL image
  return url
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
      return callback(response)
    }
  })
}
