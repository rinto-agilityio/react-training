// Libs
import RNFetchBlob from 'react-native-fetch-blob'
import { storageRef } from '@configs/firebase'

const { polyfill: { Blob } } = RNFetchBlob,

  /**
   * Avoid override old files on server
   * Generate new file name with timestamp + old Filename
   * @param {string} fileName - old file name
   * @returns {string} filename
   */
  generateFileName = fileName => Date.now() + fileName,

  /**
   * Get file type by the last point of fileName
   * @param {string} fileName - Filename with extension
   * @returns {string} fileType
   */
  getFileType = fileName => {
    const fileNameArr = fileName.split('.'),
      fileExtensionIndex = 1

    return fileNameArr[fileNameArr.length - fileExtensionIndex]
  },

  /**
   * This helper handle upload image to firebase storage
   * Convert file type to Blob before upload to make sure it's work
   * It has some trouble if we keep original images files from Image picker
   * @param {file} imageFile - File
   * @returns {promise} - File url
   */
  uploadImage = imageFile => {
    const fileBase64 = imageFile.data,
      fileName = generateFileName(imageFile.fileName),
      fileType = getFileType(imageFile.fileName)

    return new Promise((resolve, reject) => {
      let uploadBlob
      const imageRef = storageRef.child('images').child(fileName)

      // Covert original file to Blob type
      Blob.build(fileBase64, { type: 'application/octet-stream;BASE64' })
        .then(blob => {
          // Upload file to firebase storage
          uploadBlob = blob
          return imageRef.put(blob, { contentType: `image/${fileType}` })
        })
        .then(() => {
          // Close open file stream
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

// Set XMLHttpRequest and Blob to window to call it inside promise
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default uploadImage
