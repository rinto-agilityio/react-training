import { Types } from './actions'
import { REHYDRATE } from 'redux-persist/lib/constants'

import { uploadReducer, INITIAL_STATE } from './reducer'

describe('Upload reducer', () => {
  it('Should handle REHYDRATE', () => {
    expect(uploadReducer(INITIAL_STATE, { type: REHYDRATE })).toEqual(
      INITIAL_STATE.merge({
        type: REHYDRATE,
        isUploading: false
      })
    )
  })

  it('Should handle UPLOAD_PHOTO_REQUEST', () => {
    expect(
      uploadReducer(INITIAL_STATE, {
        type: Types.UPLOAD_PHOTO_REQUEST
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: Types.UPLOAD_PHOTO_REQUEST,
        isUploading: true
      })
    )
  })

  it('Should handle UPLOAD_PHOTO_CANCEL', () => {
    expect(
      uploadReducer(INITIAL_STATE, {
        type: Types.UPLOAD_PHOTO_CANCEL
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: Types.UPLOAD_PHOTO_CANCEL,
        isUploading: false
      })
    )
  })

  it('Should handle UPLOAD_PHOTO_FAILURE', () => {
    // Mocking error from api || firebase
    const error = {
      message: 'Upload failed'
    }

    expect(
      uploadReducer(INITIAL_STATE, {
        type: Types.UPLOAD_PHOTO_FAILURE,
        error: error
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: Types.UPLOAD_PHOTO_FAILURE,
        data: null,
        error: error
      })
    )
  })

  it('Should handle UPLOAD_PHOTO_SUCCESS', () => {
    // Mocking response from api || firebase
    const response = {
      downloadUrl: 'download_image_url'
    }

    expect(
      uploadReducer(INITIAL_STATE, {
        type: Types.UPLOAD_PHOTO_SUCCESS,
        response: response
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: Types.UPLOAD_PHOTO_SUCCESS,
        data: response,
        isUploading: false,
        error: null
      })
    )
  })
})
