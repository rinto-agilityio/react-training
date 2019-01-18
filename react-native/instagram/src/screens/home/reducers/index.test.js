// Libs
import { REHYDRATE } from 'redux-persist/lib/constants'

// Helpers
import { Types } from '../actions'
import { Types as UploadTypes } from '../../upload/actions'
import { homeReducer, INITIAL_STATE } from './'

// Mocking data
import { photos, users } from '@test/__mocks__/sample-data'

describe('Home reducer', () => {
  describe('Should handle REHYDRATE', () => {
    it('Get data from localStorage', () => {
      expect(
        homeReducer(INITIAL_STATE, {
          type: REHYDRATE,
          payload: {
            home: {}
          }
        })
      ).toEqual(
        INITIAL_STATE.merge({
          type: REHYDRATE
        })
      )
    })

    it('Should get default data', () => {
      expect(
        homeReducer(INITIAL_STATE, {
          type: REHYDRATE
        })
      ).toEqual(
        INITIAL_STATE.merge({
          type: REHYDRATE
        })
      )
    })
  })

  it('Should handle GET_HOME_DATA_REQUEST', () => {
    expect(
      homeReducer(INITIAL_STATE, {
        type: Types.GET_HOME_DATA_REQUEST
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: Types.GET_HOME_DATA_REQUEST
      })
    )
  })

  it('Add a new photo to data', () => {
    const newState = homeReducer(INITIAL_STATE, {
      type: UploadTypes.UPLOAD_PHOTO_SUCCESS,
      response: {
        id: Date.now()
      }
    })
    expect(newState.data.length).toEqual(INITIAL_STATE.data.length + 1)
  })

  describe('Fixed data for state', () => {
    const mockUser = users[1],
      homeState = INITIAL_STATE.merge({
        data: photos
      })

    it('Should add a new comment to post', () => {
      const postIdx = 1,
        newState = homeReducer(homeState, {
          type: Types.ADD_COMMENT_SUCCESS,
          response: {
            postId: homeState.data[postIdx].id,
            owner: mockUser,
            text: 'My comment'
          }
        })

      expect(newState.data[postIdx].comments.length)
        .toEqual(homeState.data[postIdx].comments.length + 1)
    })

    it('Should handle TOGGLE_LIKE: Increase like counting', () => {
      const postIdx = 0,
        newState = homeReducer(homeState, {
          type: Types.TOGGLE_LIKE,
          data: {
            postId: homeState.data[postIdx].id,
            userId: mockUser.id
          }
        })

      expect(newState.data[postIdx].likes.length)
        .toEqual(homeState.data[postIdx].likes.length + 1)
    })

    it('Should handle TOGGLE_LIKE: Decrease like counting', () => {
      // This has some like in mock data
      const postIdx = 1,
        newState = homeReducer(homeState, {
          type: Types.TOGGLE_LIKE,
          data: {
            postId: homeState.data[postIdx].id,
            userId: mockUser.id
          }
        })

      expect(newState.data[postIdx].likes.length)
        .toEqual(homeState.data[postIdx].likes.length - 1)
    })
  })
})
