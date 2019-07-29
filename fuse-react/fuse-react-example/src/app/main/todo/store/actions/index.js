import axios from 'axios'

export const GET_TODOS = '[TODO APP] GET TODOS'

export function getTodos(match) {
  const request = axios.get('/api/todo-app/todos', {
    params: match.params,
  })

  return dispatch =>
    request.then(response => {
      console.log('response', response)
      return dispatch({
        type: GET_TODOS,
        routeParams: match.params,
        payload: response.data,
      })
    })
}
