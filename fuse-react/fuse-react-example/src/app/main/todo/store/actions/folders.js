import firebaseService from '../../../../services/firebaseService'

export const GET_FOLDERS = '[TODO APP] GET FOLDERS'

export function getFolders() {
  const request = firebaseService.getFoldersData()

  return dispatch =>
    request.then(data =>
      dispatch({
        type: GET_FOLDERS,
        payload: data,
      })
    )
}
