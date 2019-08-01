import firebaseService from '../../../../services/firebaseService'

export const GET_FILTERS = '[TODO APP] GET FILTERS'

export function getFilters() {
  const request = firebaseService.getFiltersData()

  return dispatch =>
    request.then(data =>
      dispatch({
        type: GET_FILTERS,
        payload: data,
      })
    )
}
