import imageCompression from 'browser-image-compression'
import { storage } from '../config/firebase'

/**
 * Function: handleUploadImage
 * Used to request put file image to firebase storage
 * @param {object} file: file is uploaded
 */
export const handleUploadImage = async (file: {}) => {
  const ref = storage.ref('recipes');
  if (file && file.name) {
    const name = `${new Date()}'-'${file.name}`
    const metadata = { contentType: file.type }

    try {
      try {
        const snapshot = await ref.child(name).put(file, metadata)
        const downloadUrl = await snapshot.ref.getDownloadURL()

        return downloadUrl
      } catch (error) {
        return error
      }
    } catch (error) {
      return error
    }
  }
}

export const compressImage = async (file, minifyOptions) => {
  let compressedFileUrl
  if (file) {
    const compressedFile = await imageCompression(file, minifyOptions).then(
      compressedFile => compressedFile,
    )
    compressedFileUrl = await handleUploadImage(compressedFile)
  }

  return compressedFileUrl
}
