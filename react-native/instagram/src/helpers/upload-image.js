// Libs
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native'
import { storageRef } from '@configs/firebase'

// Helpers
import { isIOS } from '@helpers/device-info'

const Blob = RNFetchBlob.polyfill.Blob,
      fs = RNFetchBlob.fs

// Set XMLHttpRequest and Blob to window to call it inside promise
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

/**
 * This helper handle upload image to firebase storage
 * Convert file type to Blob before upload to make sure it's work
 * It has some trouble if we keep original images files from Image picker
 */
export const uploadImage = imageFile => {
  const fileUri = imageFile.uri,
        fileBase64 = imageFile.data,
        fileName = generateFileName(imageFile.fileName),
        fileType = getFileType(imageFile.fileName)

  return new Promise((resolve, reject) => {
    let uploadBlob = null
    const imageRef = storageRef.child('images').child(fileName),
          uploadUri = isIOS()
                      ? fileUri.replace('file://', '')
                      : fileUri

    // Covert original file to Blob type
    Blob.build(fileBase64, { type: 'application/octet-stream;BASE64' })
      .then(blob => {
        // Upload file to firebase storage
        uploadBlob = blob
        return imageRef.put(blob, { contentType: `image/${fileType}` })
      })
      .then(() => {
        // Close open file stream then get file download url from firebase storage
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

/**
 * Avoid override old files on server
 * Generate new file name with timestamp + old Filename
 * @param {string} fileName
 */
const generateFileName = fileName => {
  return Date.now() + fileName
}

/**
 * Get file type by the last point of fileName
 * @param {string} fileName
 */
const getFileType = fileName => {
  const fileNameArr = fileName.split('.')

  return fileNameArr[fileNameArr.length - 1]
}
