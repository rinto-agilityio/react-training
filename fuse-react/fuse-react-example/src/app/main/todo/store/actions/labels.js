import firebaseService from '../../../../services/firebaseService'

export const GET_LABELS = '[TODO APP] GET LABELS'

export function getLabels() {
  const request = firebaseService.getLabelsData()

  return dispatch =>
    request.then(data =>
      dispatch({
        type: GET_LABELS,
        payload: data,
      })
    )
}
